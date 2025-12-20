import { telegramLogo, twitterLogo } from "src/assets";
import styles from "./SocialMedia.module.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SocialMedia = () => {
  return (
    <div className={styles.Container}>
      <h2 className={styles.Title}>Social Medias</h2>
      <div className={styles.Medias}>
        <Link to="/">
          <motion.img
            src={telegramLogo}
            alt="telegram logo"
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          />
        </Link>
        <Link to="/">
          <motion.img
            src={twitterLogo}
            alt="telegram logo"
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          />
        </Link>
      </div>
    </div>
  );
};

export default SocialMedia;
