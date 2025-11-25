export type BarProps = {
  color: string;
  value: string;
};

export type Chain = {
  id: string;
  name: string;
  consensus: string;
  color: string;
  blocksPerSec: number;
};

export type ChartPoint = {
  time: number; // секунды
} & Record<string, number>;
