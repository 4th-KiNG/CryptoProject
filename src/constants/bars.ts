import type { BarProps, Chain } from "src/types/bars";

export const Bars: BarProps[] = [
  { color: "#F137A6", value: "3.500 TPS" },
  { color: "#4100F5", value: "3.500 TPS" },
  { color: "#FF5B23", value: "3.500 TPS" },
  { color: "#9CF0E1", value: "3.500 TPS" },
  { color: "#E1FF00", value: "3.500 TPS" },
  { color: "#DCB8FF", value: "3.500 TPS" },
];

export const CHAINS: Chain[] = [
  {
    id: "kaspa",
    name: "Kaspa",
    consensus: "PoW",
    color: "#4de2c6",
    blocksPerSec: 10,
  },
  {
    id: "btc",
    name: "Bitcoin",
    consensus: "PoW",
    color: "#f7931a",
    blocksPerSec: 0.1,
  },
  {
    id: "sol",
    name: "Solana",
    consensus: "PoS",
    color: "#b968ff",
    blocksPerSec: 2.5,
  },
  {
    id: "xrp",
    name: "XRP",
    consensus: "PoS-like",
    color: "#29b6f6",
    blocksPerSec: 0.3,
  },
  {
    id: "ltc",
    name: "LTC",
    consensus: "PoW",
    color: "#e0e0e0",
    blocksPerSec: 0.2,
  },
  {
    id: "sui",
    name: "Sui",
    consensus: "PoS",
    color: "#4ea4ff",
    blocksPerSec: 1.5,
  },
];
