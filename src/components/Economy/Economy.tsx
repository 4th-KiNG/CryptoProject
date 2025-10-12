import { diagramData } from "src/constants/economy";
import styles from "./Economy.module.scss";
import { Diagram, MotionRadialBorder, RadialBorder } from "..";
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
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

const Economy = () => {
  const shouldReduce = useReducedMotion();
  return (
    <div className={styles.Economy}>
      <h2 className={styles.Title}>Heading</h2>
      <div className={styles.Content}>
        <div className={styles.Analytic}>
          <MotionRadialBorder
            className={styles.Analytic_FullBlock}
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className={styles.Analytic_Label}>Total Supply</span>
            <p className={styles.Analytic_Value}>1,000,000,000,000</p>
          </MotionRadialBorder>
          <MotionRadialBorder
            className={styles.Analytic_PartBlock}
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className={styles.Analytic_Label}>Listing Price</span>
            <p className={styles.Analytic_Value}>TBD</p>
          </MotionRadialBorder>
          <MotionRadialBorder
            className={styles.Analytic_PartBlock}
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className={styles.Analytic_Label}>Listing m.cap,</span>
            <p className={styles.Analytic_Value}>TBD</p>
          </MotionRadialBorder>
          <MotionRadialBorder
            className={styles.Analytic_FullBlock}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className={styles.Analytic_Label}>
              Price differential from initial price to final listing (TGE) price
            </span>
          </MotionRadialBorder>
        </div>
        <div className={styles.Main}>
          <RadialBorder className={styles.Tokenomic}>
            <div className={styles.Tokenomic_Buttons}>
              <button className={styles.Tokenomic_Buttons_Active}>
                Tokenomic BreakDown
              </button>
              <button>Cliff & Vesting</button>
            </div>
            <div className={styles.Tokenomic_Stats}>
              <motion.div
                className={styles.Tokenomic_Stats_Data}
                variants={containerVariants}
                initial="hidden"
                whileInView={shouldReduce ? undefined : "show"}
                animate={shouldReduce ? "show" : undefined}
                viewport={{ once: true, amount: 0.2 }}
              >
                {diagramData.map((elem) => (
                  <>
                    <div style={{ backgroundColor: elem.itemStyle.color }} />
                    <motion.p variants={rowVariants}>{elem.value}%</motion.p>
                    <motion.span variants={rowVariants}>
                      {elem.name}
                    </motion.span>
                  </>
                ))}
              </motion.div>
              <Diagram className={styles.Tokenomic_Stats_Diagram} />
            </div>
          </RadialBorder>
        </div>
      </div>
    </div>
  );
};

export default Economy;
