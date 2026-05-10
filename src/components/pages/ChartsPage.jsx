import React, { useMemo, useState } from "react";
import data from "../../../data/hivData.json";
import {
  Card,
  CardTitle,
  Container,
  Select,
  Grid,
  Title,
  Filters,
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
  const years = Object.keys(data).sort((a, b) => b - a);

  const [selectedYear, setSelectedYear] = useState(years[0]);
  const [selectedMonth, setSelectedMonth] = useState("january");

  const regionData = useMemo(() => {
    const monthData = data[selectedYear]?.[selectedMonth];

    if (!monthData) return [];

    return Object.entries(monthData)
      .filter(([region]) => region !== "Україна")
      .map(([region, values]) => ({
        region,
        hivCases: values.HIV?.cases || 0,
        hivRate: values.HIV?.rate || 0,
        aidsCases: values.AIDS?.cases || 0,
        mortality: values.AIDS?.mortality || 0,
      }))
      .sort((a, b) => b.hivCases - a.hivCases);
  }, [selectedYear, selectedMonth]);

  const ukraineYearData = useMemo(() => {
    return MONTHS.map((month) => {
      const ukraine = data[selectedYear]?.[month]?.["Україна"];

      return {
        month: MONTH_LABELS[month],
        hivCases: ukraine?.HIV?.cases || 0,
        aidsCases: ukraine?.AIDS?.cases || 0,
        mortality: ukraine?.AIDS?.mortality || 0,
      };
    });
  }, [selectedYear]);

  const pieData = useMemo(() => {
    return regionData.slice(0, 6).map((item) => ({
      name: item.region,
      value: item.hivCases,
    }));
  }, [regionData]);

  // ТОП-6 по інтенсивному показнику (rate)
  const topRateData = useMemo(() => {
    return regionData
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
      <Title> ВІЛ / СНІД</Title>
      <Filters>
        <Select
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          {years.map((year) => (
            <option key={year}>{year}</option>
          ))}
        </Select>

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
      </Filters>

      <Grid>
        <Card>
          <CardTitle>Випадки ВІЛ по областях</CardTitle>
          <BarChart regionData={regionData} />
        </Card>

        <Card>
          <CardTitle>Динаміка по Україні</CardTitle>
          <LineChart ukraineYearData={ukraineYearData} />
        </Card>
        <Card>
          <CardTitle>ТОП-6 областей за ВІЛ</CardTitle>
          <PieCharts pieData={pieData} />
        </Card>
        <Card>
          <CardTitle>Детальна статистика</CardTitle>
          <Table regionData={regionData} />
        </Card>
        <Card>
          <CardTitle>ТОП-6 областей за інтенсивним показником</CardTitle>

          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={topRateData}
                dataKey="value"
                nameKey="name"
                outerRadius={140}
                label={({ name, value, index }) =>
                  `${index + 1} - ${name}: ${value}`
                }
              >
                {topRateData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>

              <Tooltip />
              {/* <Legend /> */}
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </Grid>
    </Container>
  );
}
