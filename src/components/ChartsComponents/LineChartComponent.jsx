import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";

const LineChartComponent = ({ ukraineYearData }) => {
  return (
    <ResponsiveContainer width="100%" height={450}>
      <LineChart data={ukraineYearData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />

        <Line
          type="monotone"
          dataKey="hivCases"
          stroke="#2563eb"
          strokeWidth={4}
          name="ВІЛ"
        />

        <Line
          type="monotone"
          dataKey="aidsCases"
          stroke="#dc2626"
          strokeWidth={4}
          name="СНІД"
        />

        <Line
          type="monotone"
          dataKey="mortality"
          stroke="#16a34a"
          strokeWidth={4}
          name="Смертність"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartComponent;
