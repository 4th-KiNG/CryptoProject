import { useEffect, useRef } from "react";
import type {
  Star,
  StarfieldDirection,
  StarfieldProps,
} from "./Starfield.types";

const rand = (min: number, max: number) => min + Math.random() * (max - min);
const clamp01 = (v: number) => Math.max(0, Math.min(1, v));

const Starfield = ({
  className,
  density = 220,
  speed = 0.55,
  direction = "up",
}: StarfieldProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  const starsRef = useRef<Star[]>([]);
  const dirRef = useRef<StarfieldDirection>(direction);

  const dprRef = useRef(1);
  const sizeRef = useRef({ w: 0, h: 0 });
  const lastTimeRef = useRef(0);

  useEffect(() => {
    dirRef.current = direction;
  }, [direction]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const createStar = (w: number, h: number): Star => {
      const base = rand(0.2, 0.9);
      const amp = rand(0.15, 0.6);

      return {
        x: rand(0, w),
        y: rand(0, h),

        r: rand(0.6, 1.9),
        v: rand(0.25, 1.35) * speed,

        // мерцание
        twPhase: rand(0, Math.PI * 2),
        twSpeed: rand(0.8, 3.2), // рад/сек
        twMin: clamp01(base - amp),
        twMax: clamp01(base + amp),
      };
    };

    const rebuildStars = (w: number, h: number) => {
      const count = Math.max(80, Math.floor((w * h) / 6000)) + density;
      starsRef.current = Array.from({ length: count }, () => createStar(w, h));
    };

    const resize = () => {
      // ВАЖНО: фиксируемся на viewport, а не на родителе
      const w = Math.max(1, Math.floor(window.innerWidth));
      const h = Math.max(1, Math.floor(window.innerHeight));

      const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
      dprRef.current = dpr;

      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;

      sizeRef.current = { w, h };

      // пересоздаём звёзды на ресайзе окна (это редко)
      rebuildStars(w, h);
    };

    const step = (t: number) => {
      const { w, h } = sizeRef.current;
      if (!w || !h) {
        rafRef.current = requestAnimationFrame(step);
        return;
      }

      const last = lastTimeRef.current || t;
      const dt = Math.min(0.05, (t - last) / 1000);
      lastTimeRef.current = t;

      // чистим в device-space
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // рисуем в CSS-пикселях через DPR
      const dpr = dprRef.current;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const margin = 16;
      const dir = dirRef.current;

      for (const s of starsRef.current) {
        // направление движения
        let dx = 0;
        let dy = 0;

        if (dir === "up") {
          dy = -s.v;
          dx = Math.sin(s.y * 0.01) * (s.v * 0.06);
        } else {
          dy = s.v * 0.75;
          dx = -s.v * 0.55 + Math.sin(s.y * 0.012) * (s.v * 0.03);
        }

        const k = dt * 60; // ощущение одинаковой скорости при разном FPS
        s.x += dx * k;
        s.y += dy * k;

        // мерцание
        s.twPhase += s.twSpeed * dt;
        if (s.twPhase > Math.PI * 2) s.twPhase -= Math.PI * 2;

        const tw01 = (Math.sin(s.twPhase) + 1) / 2; // 0..1
        const alpha = s.twMin + (s.twMax - s.twMin) * tw01;

        // wrap
        if (dir === "up") {
          if (s.y < -margin) {
            s.y = h + margin;
            s.x = rand(0, w);
          }
          if (s.x < -margin) s.x = w + margin;
          if (s.x > w + margin) s.x = -margin;
        } else {
          if (s.y > h + margin) {
            s.y = -margin;
            s.x = rand(0, w);
          }
          if (s.x < -margin) {
            s.x = w + margin;
            s.y = rand(0, h);
          }
        }

        ctx.beginPath();
        ctx.fillStyle = `rgba(255,255,255,${alpha})`;
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(step);
    };

    resize();
    lastTimeRef.current = performance.now();
    rafRef.current = requestAnimationFrame(step);

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [density, speed]);

  return <canvas ref={canvasRef} className={className} />;
};

export default Starfield;
