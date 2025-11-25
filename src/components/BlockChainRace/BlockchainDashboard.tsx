import { CHAINS } from "src/constants/bars";
import { BlocksChart, RaceTrack } from "..";
import styles from "./BlockchainDashboard.module.scss";
import { useEffect, useRef, useState, type FC } from "react";
import type { ChartPoint } from "src/types/bars";

function calcBlocks(t: number): Record<string, number> {
  const result: Record<string, number> = {};
  CHAINS.forEach((c) => {
    result[c.id] = c.blocksPerSec * t;
  });
  return result;
}

const BlockchainDashboard: FC = () => {
  const [time, setTime] = useState(0);
  const frameRef = useRef<number>(0);
  const startRef = useRef<number | null>(null);
  const [data, setData] = useState<ChartPoint[]>([]);
  const lastSampleRef = useRef(0);

  useEffect(() => {
    const loop = (ts: number) => {
      if (startRef.current == null) {
        startRef.current = ts;
        lastSampleRef.current = 0;
        setData([{ time: 0, ...calcBlocks(0) }]);
      }
      const elapsed = (ts - startRef.current) / 1000; // секунды
      setTime(elapsed);

      // каждые 1 сек добавляем новую точку на график
      if (elapsed - lastSampleRef.current >= 1) {
        const rounded = Math.round(elapsed); // красиво по целым секундам
        lastSampleRef.current = rounded;
        setData((prev) => [
          ...prev,
          {
            time: rounded,
            ...calcBlocks(rounded),
          },
        ]);
      }

      frameRef.current = requestAnimationFrame(loop);
    };

    frameRef.current = requestAnimationFrame(loop);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  const handleReset = () => {
    startRef.current = null;
    setTime(0);
  };

  return (
    <div className={styles.Race}>
      <div className={styles.Race_Header}>
        <h2>Blockchain Speed Comparison</h2>
        <button className={styles.Race_Reset} onClick={handleReset}>
          Reset
        </button>
      </div>

      <div className={styles.Race_Tracks}>
        {CHAINS.map((chain) => (
          <RaceTrack key={chain.id} chain={chain} time={time} />
        ))}
      </div>
      <BlocksChart chains={CHAINS} data={data} />
    </div>
  );
};

export default BlockchainDashboard;
