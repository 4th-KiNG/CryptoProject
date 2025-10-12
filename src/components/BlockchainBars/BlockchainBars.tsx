import { motion } from "framer-motion";
import styles from "./BlockchainBars.module.scss";
import { Bars } from "src/constants/bars";

const BlockchainBars = () => {
  return (
    <div className={styles.BlockchainBars}>
      <h2 className={styles.Title}>The Blockcnain TPS Head-to-head</h2>
      <div className={styles.Bars}>
        {[...Bars.reverse()].map((bar, index) => (
          <div className={styles.Bars_Element}>
            <p className={styles.Bars_Element_Value}>{bar.value}</p>
            <motion.div
              key={index}
              initial={{ height: 0 }}
              whileInView={{
                height:
                  (Bars.length - index) *
                  (document.documentElement.clientWidth >= 768 ? 70 : 26),
              }}
              transition={{ duration: 1, delay: index * 0.2 }}
              className={styles.Bars_Element_Bar}
              style={{
                background: `linear-gradient(to bottom, ${bar.color} 70%, rgba(0, 0, 0, 0) 100%)`,
              }}
              viewport={{ once: true, amount: 0.3 }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlockchainBars;
