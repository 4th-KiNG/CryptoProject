import { amd, gradient, nvidia } from "src/assets";
import styles from "./SupportedBy.module.scss";
import { motion } from "framer-motion";
import { useIsMobile } from "src/hooks/useIsMobile";

const SupportedBy = () => {
  const { isMobile } = useIsMobile();
  return (
    <div className={styles.SupportedBy}>
      <div className={styles.Info}>
        <h2 className={styles.Title}>Supported by</h2>
        <div className={styles.Logos}>
          <motion.img
            src={amd}
            alt="amd logo"
            initial={{ x: isMobile ? -50 : -300, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          />
          <motion.img
            src={nvidia}
            alt="nvidia logo"
            initial={{ x: isMobile ? 50 : 300, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          />
        </div>
      </div>
      <img src={gradient} alt="gradient" className={styles.Gradient} />
    </div>
  );
};

export default SupportedBy;
