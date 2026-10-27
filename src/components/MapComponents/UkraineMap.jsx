import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import {
  ArrowLeft,
  Activity,
  BarChart3,
  CalendarDays,
  MapPinned,
  X,
  Info,
  TrendingUp,
} from "lucide-react";

import HIVStats from "../../../data/HIVStats.json";
import { getRegionName } from "../../../data/regionNames";
import { MONTHS } from "../../../data/month";
import { MAP_TO_JSON } from "../../../data/mapToJson";

import {
  MapWrapper,
  PageHeader,
  HeaderTop,
  BackButton,
  HeaderBadge,
  PageTitle,
  PageSubtitle,
  ChartsLink,
  Controls,
  ControlGroup,
  ControlTitle,
  ToggleButtons,
  ToggleButton,
  Select,
  MapSection,
  MapHeader,
  MapTitle,
  MapSubtitle,
  MapContent,
  MapContainer,
  MapSidePanel,
  Unit,
  Legend,
  LegendTitle,
  LegendItems,
  LegendItem,
  LegendColor,
  InfoCard,
  InfoCardHeader,
  InfoTitle,
  InfoType,
  InfoRow,
  CloseButton,
  NoData,
  MapHint,
  Footer,
} from "./UkraineMap.styled";

const GEO_URL = `${import.meta.env.BASE_URL}ukraine_map.json`;

const COLORS = ["#d9f5f7", "#8bdde8", "#40b9d4", "#247fae", "#174b82"];

const NO_DATA_COLOR = "#40536a";

const formatNumber = (value) =>
  value == null || !Number.isFinite(Number(value))
    ? "—"
    : new Intl.NumberFormat("uk-UA", {
        maximumFractionDigits: 2,
      }).format(Number(value));

function getColor(rate, minRate, maxRate) {
  if (rate == null || !Number.isFinite(Number(rate))) {
    return NO_DATA_COLOR;
  }

  if (maxRate === minRate) {
    return COLORS[2];
  }

  const normalized = (Number(rate) - minRate) / (maxRate - minRate);

  const index = Math.min(
    COLORS.length - 1,
    Math.max(0, Math.floor(normalized * COLORS.length)),
  );

  return COLORS[index];
}

export default function UkraineMap() {
  const years = useMemo(
    () => Object.keys(HIVStats).sort((a, b) => Number(b) - Number(a)),
    [],
  );

  const latestPeriod = useMemo(() => {
    for (const year of years) {
      const months = MONTHS.filter((item) => HIVStats?.[year]?.[item.key]);

      if (months.length) {
        return {
          year,
          month: months[months.length - 1].key,
        };
      }
    }

    return {
      year: years[0] ?? "",
      month: MONTHS[0]?.key ?? "january",
    };
  }, [years]);

  const [indicator, setIndicator] = useState("HIV");
  const [year, setYear] = useState(latestPeriod.year);
  const [month, setMonth] = useState(latestPeriod.month);
  const [selectedRegion, setSelectedRegion] = useState(null);

  const availableMonths = useMemo(
    () => MONTHS.filter((item) => HIVStats?.[year]?.[item.key]),
    [year],
  );

  const currentData = useMemo(
    () => HIVStats?.[year]?.[month] ?? {},
    [year, month],
  );

  const rates = useMemo(
    () =>
      Object.entries(currentData)
        .filter(([name]) => name !== "Україна")
        .map(([, region]) => region?.[indicator]?.rate)
        .filter((value) => value != null && Number.isFinite(Number(value)))
        .map(Number),
    [currentData, indicator],
  );

  const minRate = rates.length ? Math.min(...rates) : 0;
  const maxRate = rates.length ? Math.max(...rates) : 0;

  const indicatorLabel = indicator === "HIV" ? "ВІЛ" : "СНІД";

  const handleYearChange = (event) => {
    const nextYear = event.target.value;

    const months = MONTHS.filter((item) => HIVStats?.[nextYear]?.[item.key]);

    setYear(nextYear);

    if (!months.some((item) => item.key === month)) {
      setMonth(months[months.length - 1]?.key ?? MONTHS[0].key);
    }

    setSelectedRegion(null);
  };

  const handleRegionClick = (geo) => {
    const mapRegionName = getRegionName(geo);
    const jsonRegionName = MAP_TO_JSON[mapRegionName] || mapRegionName;

    setSelectedRegion({
      name: mapRegionName,
      data: currentData?.[jsonRegionName] ?? null,
    });
  };

  return (
    <MapWrapper>
      <PageHeader>
        <HeaderTop>
          <BackButton as={Link} to="/">
            <ArrowLeft size={18} />
            На головну
          </BackButton>

          <HeaderBadge>
            <Activity size={15} />
            HIV · Regional Analytics
          </HeaderBadge>
        </HeaderTop>

        <PageTitle>
          Інтерактивна
          <span> мапа України</span>
        </PageTitle>

        <PageSubtitle>
          Досліджуйте регіональний розподіл показників ВІЛ та СНІД, порівнюйте
          області й аналізуйте зміни за вибраний період.
        </PageSubtitle>
      </PageHeader>

      <Controls>
        <ControlGroup>
          <ControlTitle>
            <Activity size={16} />
            Показник
          </ControlTitle>

          <ToggleButtons>
            <ToggleButton
              type="button"
              $active={indicator === "HIV"}
              onClick={() => {
                setIndicator("HIV");
                setSelectedRegion(null);
              }}
            >
              ВІЛ
            </ToggleButton>

            <ToggleButton
              type="button"
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
          <ControlTitle>
            <CalendarDays size={16} />
            Рік
          </ControlTitle>

          <Select value={year} onChange={handleYearChange}>
            {years.map((yearValue) => (
              <option key={yearValue} value={yearValue}>
                {yearValue}
              </option>
            ))}
          </Select>
        </ControlGroup>

        <ControlGroup>
          <ControlTitle>
            <CalendarDays size={16} />
            Місяць
          </ControlTitle>

          <Select
            value={month}
            onChange={(event) => {
              setMonth(event.target.value);
              setSelectedRegion(null);
            }}
          >
            {availableMonths.map((item) => (
              <option key={item.key} value={item.key}>
                {item.label}
              </option>
            ))}
          </Select>
        </ControlGroup>

        <ChartsLink as={Link} to="/charts">
          <BarChart3 size={18} />
          Переглянути аналітику
        </ChartsLink>
      </Controls>

      <MapSection>
        <MapHeader>
          <div>
            <MapTitle>
              <MapPinned size={22} />
              Захворюваність на {indicatorLabel}
            </MapTitle>

            <MapSubtitle>
              {MONTHS.find((m) => m.key === month)?.label} {year}
            </MapSubtitle>
          </div>

          <Unit>
            <TrendingUp size={16} />
            На 100 тис. населення
          </Unit>
        </MapHeader>

        <MapContent $hasSelection={!!selectedRegion}>
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
                          stroke={isSelected ? "#67e8f9" : "#1b3047"}
                          strokeWidth={isSelected ? 2.5 : 0.8}
                          onClick={() => handleRegionClick(geo)}
                          style={{
                            default: {
                              outline: "none",
                            },
                            hover: {
                              fill: "#67e8f9",
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
                        stroke="#1b3047"
                        strokeWidth={0.7}
                        pointerEvents="none"
                      />
                    )}

                    {outline?.svgPath && (
                      <path
                        d={outline.svgPath}
                        fill="none"
                        stroke="#67e8f9"
                        strokeWidth={1.3}
                        pointerEvents="none"
                      />
                    )}
                  </>
                )}
              </Geographies>
            </ComposableMap>
          </MapContainer>

          {selectedRegion && (
            <MapSidePanel>
              <InfoCard>
                <InfoCardHeader>
                  <div>
                    <InfoType>
                      <MapPinned size={15} />
                      Обраний регіон
                    </InfoType>

                    <InfoTitle>{selectedRegion.name}</InfoTitle>
                  </div>

                  <CloseButton
                    type="button"
                    onClick={() => setSelectedRegion(null)}
                    aria-label="Закрити інформацію"
                  >
                    <X size={20} />
                  </CloseButton>
                </InfoCardHeader>

                {selectedRegion.data ? (
                  <>
                    <InfoRow>
                      <span>Зареєстровані випадки {indicatorLabel}</span>
                      <strong>
                        {formatNumber(selectedRegion.data?.[indicator]?.cases)}
                      </strong>
                    </InfoRow>

                    <InfoRow>
                      <span>Показник на 100 тис.</span>
                      <strong>
                        {formatNumber(selectedRegion.data?.[indicator]?.rate)}
                      </strong>
                    </InfoRow>

                    {indicator === "AIDS" && (
                      <>
                        <InfoRow>
                          <span>Померло</span>
                          <strong>
                            {formatNumber(selectedRegion.data?.AIDS?.mortality)}
                          </strong>
                        </InfoRow>

                        <InfoRow>
                          <span>Смертність на 100 тис.</span>
                          <strong>
                            {formatNumber(
                              selectedRegion.data?.AIDS?.mortality_rate,
                            )}
                          </strong>
                        </InfoRow>
                      </>
                    )}
                  </>
                ) : (
                  <NoData>
                    Для цього регіону немає даних за вибраний період.
                  </NoData>
                )}
              </InfoCard>
            </MapSidePanel>
          )}
        </MapContent>

        <Legend>
          <LegendTitle>Інтенсивний показник на 100 тис. населення</LegendTitle>

          <LegendItems>
            {rates.length > 0 &&
              COLORS.map((color, index) => {
                const step = (maxRate - minRate) / COLORS.length;

                const from = minRate + step * index;
                const to =
                  index === COLORS.length - 1
                    ? maxRate
                    : minRate + step * (index + 1);

                return (
                  <LegendItem key={color}>
                    <LegendColor $color={color} />
                    <span>
                      {from.toFixed(1)} – {to.toFixed(1)}
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

        <MapHint>
          <Info size={16} />
          Натисніть на область, щоб переглянути детальну статистику.
        </MapHint>
      </MapSection>

      <Footer>
        <span>
          © {new Date().getFullYear()} National Aerospace University «Kharkiv
          Aviation Institute»
        </span>
        <span>Платформа епідеміологічної аналітики</span>
      </Footer>
    </MapWrapper>
  );
}
