import type { Chain } from "src/types/bars";
import styles from "./RaceTrack.module.scss";
import { useMemo, type FC } from "react";

type RaceTrackProps = {
  chain: Chain;
  time: number;
};

const RaceTrack: FC<RaceTrackProps> = ({ chain, time }) => {
  const lapsPerSec = useMemo(() => {
    return chain.blocksPerSec / 5;
  }, [chain.blocksPerSec]);
  const progress = useMemo(() => {
    return (time * lapsPerSec) % 1;
  }, [lapsPerSec, time]);

  const blocks = useMemo(() => {
    return time * chain.blocksPerSec;
  }, [chain.blocksPerSec, time]);

  return (
    <div className={styles.Track}>
      <div className={styles.Track_Top}>
        <div className={styles.Track_Left}>
          <span
            className={styles.Track_Dot}
            style={{ backgroundColor: chain.color }}
          />
          <span className={styles.Track_Name}>{chain.name}</span>
          <span className={styles.Track_Consensus}>{chain.consensus}</span>
        </div>
        <div className={styles.Track_Stats}>
          <div>
            <span className={styles.Track_Label}>Time</span>
            <span className={styles.Track_Value}>{time.toFixed(1)}s</span>
          </div>
          <div>
            <span className={styles.Track_Label}>Blocks</span>
            <span className={styles.Track_Value}>{blocks.toFixed(1)}</span>
          </div>
        </div>
      </div>

      <div className={styles.Track_Bar}>
        <div
          className={styles.Track_Runner}
          style={{
            left: `calc(${progress * 100}% - 13px)`, // 13px = половина ширины бегунка
            backgroundColor: chain.color,
          }}
        />
      </div>
    </div>
  );
};
export default RaceTrack;
