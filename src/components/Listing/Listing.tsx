import { EXCHANGES } from "src/constants/listing";
import styles from "./Listing.module.scss";
import { MotionRadialBorder } from "../RadialBorder";
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
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
};

const Listing = () => {
  const shouldReduce = useReducedMotion();
  return (
    <div className={styles.Listing}>
      <h2 className={styles.Title}>Listing on</h2>
      <motion.div
        className={styles.Exchanges}
        variants={containerVariants}
        initial="hidden"
        whileInView={shouldReduce ? undefined : "show"}
        animate={shouldReduce ? "show" : undefined}
        viewport={{ once: true, amount: 0.2 }}
      >
        {EXCHANGES.map((exchange) => (
          <MotionRadialBorder
            className={styles.Exchange}
            classNameContent={styles.Exchange_Content}
            variants={rowVariants}
          >
            <img src={exchange.icon} alt="exchange" />
            <p>{exchange.title}</p>
          </MotionRadialBorder>
        ))}
      </motion.div>
    </div>
  );
};

export default Listing;
