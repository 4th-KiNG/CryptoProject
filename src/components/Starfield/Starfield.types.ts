export type StarfieldDirection = "up" | "downLeft";

export type Star = {
  x: number;
  y: number;

  r: number; // радиус
  v: number; // скорость движения

  // мерцание
  twPhase: number; // фаза (0..2π)
  twSpeed: number; // скорость мерцания (рад/сек)
  twMin: number; // min alpha (0..1)
  twMax: number; // max alpha (0..1)
};

export type StarfieldProps = {
  className?: string;
  density?: number; // базовая “плотность”
  speed?: number; // множитель скорости движения
  direction?: StarfieldDirection;
};
