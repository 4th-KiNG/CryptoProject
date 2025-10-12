import { useIsMobile } from "src/hooks/useIsMobile";
import styles from "./Introduction.module.scss";
import { motion } from "framer-motion";

const Introduction = () => {
  const { isMobile } = useIsMobile();
  return (
    <div className={styles.Introduction}>
      <div className={styles.Blur} />
      <div className={styles.Info}>
        <motion.h1
          className={styles.Title}
          initial={{ y: -200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Build <span>Beyond</span>
        </motion.h1>
        <motion.p
          className={styles.Description}
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Text text text text text text text text text
        </motion.p>
        <div className={styles.Buttons}>
          <motion.button
            className={styles.Buttons_Primary}
            initial={{ x: isMobile ? -50 : -300, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Get started
          </motion.button>
          <motion.button
            className={styles.Buttons_Secondary}
            initial={{ x: isMobile ? 50 : 300, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Get started
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
