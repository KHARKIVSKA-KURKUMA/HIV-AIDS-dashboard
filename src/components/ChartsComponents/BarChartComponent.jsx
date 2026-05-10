import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";

const BarChartComponent = ({ regionData }) => {
  return (
    <ResponsiveContainer width="100%" height={450}>
      <BarChart data={regionData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="region"
          angle={-45}
          textAnchor="end"
          interval={0}
          height={120}
        />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="hivCases"
          name="ВІЛ"
          fill="#2563eb"
          radius={[10, 10, 0, 0]}
        />
        <Bar
          dataKey="aidsCases"
          name="СНІД"
          fill="#dc2626"
          radius={[10, 10, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;
