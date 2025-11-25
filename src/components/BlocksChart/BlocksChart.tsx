import type { Chain, ChartPoint } from "src/types/bars";
import styles from "./BlocksChart.module.scss";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { FC } from "react";
import React from "react";
type BlocksChartProps = {
  chains: Chain[];
  data: ChartPoint[];
};

const BlocksChartBase: FC<BlocksChartProps> = ({ chains, data }) => {
  return (
    <div className={styles.Chart}>
      <ResponsiveContainer width="100%" height={320}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
          <XAxis
            dataKey="time"
            tickFormatter={(v) => `${v}s`}
            tick={{ fontSize: 12, fill: "#9ca3af" }}
          />
          <YAxis
            tick={{ fontSize: 12, fill: "#9ca3af" }}
            label={{
              value: "Total Blocks Created",
              angle: -90,
              position: "insideLeft",
              offset: 10,
              fill: "#9ca3af",
            }}
          />
          <Tooltip
            contentStyle={{
              background: "#020617",
              border: "1px solid #1f2937",
            }}
            labelFormatter={(v) => `${v}s`}
          />
          <Legend wrapperStyle={{ paddingTop: 8 }} />
          {chains.map((c) => (
            <Line
              key={c.id}
              type="monotone"
              dataKey={c.id}
              name={c.name}
              stroke={c.color}
              dot={false}
              strokeWidth={2}
              isAnimationActive={false}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

const BlocksChart = React.memo(
  BlocksChartBase,
  (prev, next) => prev.data === next.data && prev.chains === next.chains
);

export default BlocksChart;
