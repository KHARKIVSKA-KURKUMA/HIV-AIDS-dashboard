import { useMemo, useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import HIVStats from "../../../data/HIVStats.json";
import { getRegionName } from "../../../data/regionNames";
import { MONTHS } from "../../../data/month";
import { MAP_TO_JSON } from "../../../data/mapToJson";
import {
  MapContainer,
  NoData,
  MapHeader,
  MapSubtitle,
  MapTitle,
  MapWrapper,
  InfoCard,
  InfoRow,
  InfoTitle,
  InfoType,
  Legend,
  LegendColor,
  LegendItem,
  LegendTitle,
  LegendItems,
  CloseButton,
  ControlGroup,
  ControlTitle,
  Controls,
  ToggleButton,
  ToggleButtons,
  Select,
  Unit,
} from "./UkraineMap.styled";

const GEO_URL = "/ukraine_map.json";

// я не обрала який варіант хочу)
// const COLORS = ["#d1f8cd", "#76C457", "#FED976", "#FD8D3C", "#BD0026"];
const COLORS = ["#edf8e9", "#bae4b3", "#74c476", "#31a354", "#006d2c"];

const NO_DATA_COLOR = "#e5e7eb";

function getColor(rate, minRate, maxRate) {
  if (rate === null || rate === undefined) {
    return NO_DATA_COLOR;
  }

  if (maxRate === minRate) {
    return COLORS[2];
  }

  const normalized = (rate - minRate) / (maxRate - minRate);

  if (normalized <= 0.2) return COLORS[0];
  if (normalized <= 0.4) return COLORS[1];
  if (normalized <= 0.6) return COLORS[2];
  if (normalized <= 0.8) return COLORS[3];

  return COLORS[4];
}

export default function UkraineMap() {
  const [indicator, setIndicator] = useState("HIV");
  const [year, setYear] = useState("2020");
  const [month, setMonth] = useState("january");
  const [selectedRegion, setSelectedRegion] = useState(null);
  const currentData = HIVStats?.[year]?.[month] || {};
  const rates = useMemo(() => {
    return Object.values(currentData)
      .map((region) => region?.[indicator]?.rate)
      .filter((value) => typeof value === "number" && Number.isFinite(value));
  }, [currentData, indicator]);

  const minRate = rates.length ? Math.min(...rates) : 0;
  const maxRate = rates.length ? Math.max(...rates) : 0;

  const handleRegionClick = (geo) => {
    const mapRegionName = getRegionName(geo);
    const jsonRegionName = MAP_TO_JSON[mapRegionName] || mapRegionName;
    const regionData = currentData?.[jsonRegionName];
    if (!regionData) {
      setSelectedRegion({
        name: mapRegionName,
        data: null,
      });
      return;
    }

    setSelectedRegion({
      name: mapRegionName,
      data: regionData,
    });
  };

  const indicatorLabel = indicator === "HIV" ? "ВІЛ" : "СНІД";

  return (
    <MapWrapper>
      <Controls>
        <ControlGroup>
          <ControlTitle>Показник</ControlTitle>
          <ToggleButtons>
            <ToggleButton
              $active={indicator === "HIV"}
              onClick={() => {
                setIndicator("HIV");
                setSelectedRegion(null);
              }}
            >
              ВІЛ
            </ToggleButton>
            <ToggleButton
              $active={indicator === "AIDS"}
              onClick={() => {
                setIndicator("AIDS");
                setSelectedRegion(null);
              }}
            >
              СНІД
            </ToggleButton>
          </ToggleButtons>
        </ControlGroup>
        <ControlGroup>
          <ControlTitle>Рік</ControlTitle>
          <Select
            value={year}
            onChange={(e) => {
              setYear(e.target.value);
              setSelectedRegion(null);
            }}
          >
            {Object.keys(HIVStats).map((yearValue) => (
              <option key={yearValue} value={yearValue}>
                {yearValue}
              </option>
            ))}
          </Select>
        </ControlGroup>
        <ControlGroup>
          <ControlTitle>Місяць</ControlTitle>
          <Select
            value={month}
            onChange={(e) => {
              setMonth(e.target.value);
              setSelectedRegion(null);
            }}
          >
            {MONTHS.filter((item) => HIVStats?.[year]?.[item.key]).map(
              (item) => (
                <option key={item.key} value={item.key}>
                  {item.label}
                </option>
              ),
            )}
          </Select>
        </ControlGroup>
      </Controls>
      <MapHeader>
        <div>
          <MapTitle>Захворюваність на {indicatorLabel}</MapTitle>
          <MapSubtitle>
            {MONTHS.find((m) => m.key === month)?.label} {year}
          </MapSubtitle>
        </div>
        <Unit>на 100 тис. населення</Unit>
      </MapHeader>
      <MapContainer>
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            center: [31, 49],
            scale: 2200,
          }}
          width={800}
          height={600}
          style={{
            width: "100%",
            height: "auto",
          }}
        >
          <Geographies geography={GEO_URL}>
            {({ geographies, borders, outline }) => (
              <>
                {geographies.map((geo) => {
                  const mapRegionName = getRegionName(geo);

                  const jsonRegionName =
                    MAP_TO_JSON[mapRegionName] || mapRegionName;

                  const regionData = currentData?.[jsonRegionName];

                  const rate = regionData?.[indicator]?.rate;

                  const fill = getColor(rate, minRate, maxRate);

                  const isSelected = selectedRegion?.name === mapRegionName;

                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={fill}
                      stroke={isSelected ? "#111827" : "#ffffff"}
                      strokeWidth={isSelected ? 2 : 0.7}
                      onClick={() => handleRegionClick(geo)}
                      style={{
                        default: {
                          outline: "none",
                        },
                        hover: {
                          fill: "#facc15",
                          outline: "none",
                          cursor: "pointer",
                        },
                        pressed: {
                          outline: "none",
                        },
                      }}
                    />
                  );
                })}

                {borders?.svgPath && (
                  <path
                    d={borders.svgPath}
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth={0.7}
                    pointerEvents="none"
                  />
                )}

                {outline?.svgPath && (
                  <path
                    d={outline.svgPath}
                    fill="none"
                    stroke="#374151"
                    strokeWidth={1.5}
                    pointerEvents="none"
                  />
                )}
              </>
            )}
          </Geographies>
        </ComposableMap>
      </MapContainer>

      <Legend>
        <LegendTitle>Захворюваність, на 100 тис.</LegendTitle>

        <LegendItems>
          {COLORS.map((color, index) => {
            const step = (maxRate - minRate) / 5;

            const from = minRate + step * index;

            const to = index === 4 ? maxRate : minRate + step * (index + 1);

            return (
              <LegendItem key={color}>
                <LegendColor $color={color} />

                <span>
                  {from.toFixed(1)}
                  {" – "}
                  {to.toFixed(1)}
                </span>
              </LegendItem>
            );
          })}

          <LegendItem>
            <LegendColor $color={NO_DATA_COLOR} />

            <span>Немає даних</span>
          </LegendItem>
        </LegendItems>
      </Legend>

      {selectedRegion && (
        <InfoCard>
          <CloseButton onClick={() => setSelectedRegion(null)}>×</CloseButton>

          <InfoTitle>{selectedRegion.name}</InfoTitle>

          {selectedRegion.data ? (
            <>
              <InfoType>{indicatorLabel}</InfoType>

              <InfoRow>
                <span>Кількість випадків</span>

                <strong>
                  {selectedRegion.data?.[indicator]?.cases ?? "—"}
                </strong>
              </InfoRow>

              <InfoRow>
                <span>Захворюваність</span>

                <strong>
                  {selectedRegion.data?.[indicator]?.rate ?? "—"} на 100 тис.
                </strong>
              </InfoRow>

              {indicator === "AIDS" && (
                <>
                  <InfoRow>
                    <span>Померло</span>

                    <strong>
                      {selectedRegion.data?.AIDS?.mortality ?? "—"}
                    </strong>
                  </InfoRow>

                  <InfoRow>
                    <span>Смертність</span>

                    <strong>
                      {selectedRegion.data?.AIDS?.mortality_rate ?? "—"} на 100
                      тис.
                    </strong>
                  </InfoRow>
                </>
              )}
            </>
          ) : (
            <NoData>Для цього регіону немає даних за вибраний період.</NoData>
          )}
        </InfoCard>
      )}
    </MapWrapper>
  );
}
