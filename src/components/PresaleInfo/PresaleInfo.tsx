import { TABLE_HEADS } from "src/constants/presale";
import styles from "./PresaleInfo.module.scss";
import { motion, useReducedMotion, type Variants } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.06,
    },
  },
};

const rowVariants: Variants = {
  hidden: { y: 100, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
};

export const TableLine = () => {
  return (
    <motion.tr
      className={styles.Table_Line}
      variants={rowVariants}
      style={{ willChange: "transform, opacity" }}
    >
      <td>
        <div>Stage 1</div>
      </td>
      <td className={styles.Table_Line_Price}>
        <div>$0.0000775</div>
      </td>
      <td>
        <div>
          <p>1,000,000,000 TRUE</p>
          <span>0.1%</span>
        </div>
      </td>
      <td>
        <div>77500 $</div>
      </td>
      <td>
        <div>1%</div>
      </td>
      <td>
        <div>-</div>
      </td>
    </motion.tr>
  );
};

const PresaleInfo = () => {
  const shouldReduce = useReducedMotion();
  return (
    <div className={styles.PresaleInfo}>
      <h2 className={styles.Title}>Presale</h2>
      <div className={styles.TableWrapper}>
        <table className={styles.Table}>
          <thead>
            <tr className={styles.Table_Heads}>
              {TABLE_HEADS.map((head, idx) => (
                <th key={idx}>{head}</th>
              ))}
            </tr>
          </thead>
          <motion.tbody
            variants={containerVariants}
            initial="hidden"
            whileInView={shouldReduce ? undefined : "show"}
            animate={shouldReduce ? "show" : undefined}
            viewport={{ once: true, amount: 0.2 }}
          >
            {[0, 0, 0].map(() => (
              <TableLine />
            ))}
          </motion.tbody>
        </table>
      </div>
    </div>
  );
};

export default PresaleInfo;
