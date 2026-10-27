import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Activity,
  BarChart3,
  CalendarDays,
  MapPinned,
  TrendingUp,
  TableProperties,
  ChartPie,
} from "lucide-react";

import data from "../../../data/HIVStats.json";

import {
  Card,
  CardTitle,
  Container,
  Select,
  Grid,
  Title,
  Filters,
  Header,
  HeaderTop,
  BackButton,
  Badge,
  Subtitle,
  FilterGroup,
  FilterLabel,
  ChartIcon,
  CardHeader,
  CardDescription,
  Footer,
  MapLink,
  EmptyState,
} from "../ChartsComponents/ChartsPageStyled";

import { BarChart, LineChart, PieCharts, Table } from "../ChartsComponents";

import { COLORS, MONTHS, MONTH_LABELS } from "../consts";

import {
  ResponsiveContainer,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

export default function ChartsPage() {
  const years = useMemo(
    () => Object.keys(data).sort((a, b) => Number(b) - Number(a)),
    [],
  );

  const [selectedYear, setSelectedYear] = useState(years[0] ?? "");

  const [selectedMonth, setSelectedMonth] = useState(MONTHS[0]);

  const regionData = useMemo(() => {
    const monthData = data[selectedYear]?.[selectedMonth];

    if (!monthData) return [];

    return Object.entries(monthData)
      .filter(([region]) => region !== "Україна")
      .map(([region, values]) => ({
        region,
        hivCases: values.HIV?.cases ?? 0,
        hivRate: values.HIV?.rate ?? 0,
        aidsCases: values.AIDS?.cases ?? 0,
        mortality: values.AIDS?.mortality ?? 0,
      }))
      .sort((a, b) => b.hivCases - a.hivCases);
  }, [selectedYear, selectedMonth]);

  const ukraineYearData = useMemo(() => {
    return MONTHS.map((month) => {
      const ukraine = data[selectedYear]?.[month]?.["Україна"];

      return {
        month: MONTH_LABELS[month],
        hivCases: ukraine?.HIV?.cases ?? null,
        aidsCases: ukraine?.AIDS?.cases ?? null,
        mortality: ukraine?.AIDS?.mortality ?? null,
      };
    });
  }, [selectedYear]);

  const pieData = useMemo(() => {
    return regionData.slice(0, 6).map((item) => ({
      name: item.region,
      value: item.hivCases,
    }));
  }, [regionData]);

  const topRateData = useMemo(() => {
    return [...regionData]
      .filter((item) => item.hivRate > 0)
      .sort((a, b) => b.hivRate - a.hivRate)
      .slice(0, 6)
      .map((item) => ({
        name: item.region,
        value: item.hivRate,
      }));
  }, [regionData]);

  return (
    <Container>
      <Header>
        <HeaderTop>
          <BackButton as={Link} to="/">
            <ArrowLeft size={18} />
            На головну
          </BackButton>

          <Badge>
            <Activity size={15} />
            HIV Analytics
          </Badge>
        </HeaderTop>

        <Title>
          Аналітика
          <span> ВІЛ / СНІД</span>
        </Title>

        <Subtitle>
          Досліджуйте динаміку захворюваності, порівнюйте регіональні показники
          та аналізуйте епідеміологічні дані України.
        </Subtitle>
      </Header>

      <Filters>
        <FilterGroup>
          <FilterLabel>
            <CalendarDays size={16} />
            Рік
          </FilterLabel>

          <Select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </Select>
        </FilterGroup>

        <FilterGroup>
          <FilterLabel>
            <CalendarDays size={16} />
            Місяць
          </FilterLabel>

          <Select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
          >
            {MONTHS.map((month) => (
              <option key={month} value={month}>
                {MONTH_LABELS[month]}
              </option>
            ))}
          </Select>
        </FilterGroup>

        <MapLink as={Link} to="/map">
          <MapPinned size={18} />
          Переглянути карту
        </MapLink>
      </Filters>

      <Grid>
        <Card>
          <CardHeader>
            <ChartIcon $color="#38bdf8">
              <BarChart3 size={22} />
            </ChartIcon>

            <div>
              <CardTitle>Випадки ВІЛ по областях</CardTitle>
              <CardDescription>
                Регіональний розподіл за вибраний місяць
              </CardDescription>
            </div>
          </CardHeader>

          <BarChart regionData={regionData} />
        </Card>

        <Card>
          <CardHeader>
            <ChartIcon $color="#a78bfa">
              <TrendingUp size={22} />
            </ChartIcon>

            <div>
              <CardTitle>Динаміка по Україні</CardTitle>
              <CardDescription>
                Помісячна статистика за {selectedYear} рік
              </CardDescription>
            </div>
          </CardHeader>

          <LineChart ukraineYearData={ukraineYearData} />
        </Card>

        <Card>
          <CardHeader>
            <ChartIcon $color="#2dd4bf">
              <ChartPie size={22} />
            </ChartIcon>

            <div>
              <CardTitle>ТОП-6 областей за ВІЛ</CardTitle>
              <CardDescription>
                Регіони з найбільшою кількістю випадків
              </CardDescription>
            </div>
          </CardHeader>

          <PieCharts pieData={pieData} />
        </Card>

        <Card>
          <CardHeader>
            <ChartIcon $color="#fbbf24">
              <TableProperties size={22} />
            </ChartIcon>

            <div>
              <CardTitle>Детальна статистика</CardTitle>
              <CardDescription>
                Показники ВІЛ та СНІД за регіонами
              </CardDescription>
            </div>
          </CardHeader>

          <Table regionData={regionData} />
        </Card>

        <Card $wide>
          <CardHeader>
            <ChartIcon $color="#fb7185">
              <Activity size={22} />
            </ChartIcon>

            <div>
              <CardTitle>ТОП-6 областей за інтенсивним показником</CardTitle>
              <CardDescription>
                Кількість випадків ВІЛ на 100 тис. населення
              </CardDescription>
            </div>
          </CardHeader>

          {topRateData.length > 0 ? (
            <ResponsiveContainer width="100%" height={400}>
              <PieChart>
                <Pie
                  data={topRateData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={75}
                  outerRadius={130}
                  paddingAngle={3}
                  labelLine={false}
                  label={({ percent }) => `${(percent * 100).toFixed(1)}%`}
                >
                  {topRateData.map((entry, index) => (
                    <Cell
                      key={entry.name}
                      fill={COLORS[index % COLORS.length]}
                      stroke="#122238"
                      strokeWidth={2}
                    />
                  ))}
                </Pie>

                <Tooltip
                  formatter={(value, name) => [Number(value).toFixed(2), name]}
                  contentStyle={{
                    background: "#14263c",
                    border: "1px solid #35506b",
                    borderRadius: "12px",
                    color: "#fff",
                  }}
                  itemStyle={{ color: "#eaf2ff" }}
                />

                <Legend
                  wrapperStyle={{
                    color: "#b6c7da",
                    fontSize: "12px",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          ) : (
            <EmptyState>Немає даних за вибраний період.</EmptyState>
          )}
        </Card>
      </Grid>

      <Footer>
        <span>© {new Date().getFullYear()} HIV Forecast</span>
        <span>Платформа епідеміологічної аналітики</span>
      </Footer>
    </Container>
  );
}
