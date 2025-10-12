import { blocks } from "src/constants/sui";
import styles from "./Sui.module.scss";
import classNames from "classnames";
import { motion } from "framer-motion";

const Sui = () => {
  return (
    <div className={styles.Sui}>
      <div className={styles.Header}>
        <h2 className={styles.Title}>Heading</h2>
        <p className={styles.Description}>
          Designed to deliver on the promise of Web3
        </p>
      </div>
      <button className={styles.GetStarted}>Get started</button>
      <div className={styles.Blocks}>
        {blocks.map((block) => (
          <motion.div
            key={block.title}
            className={styles.InfoBlock}
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {block.gif && (
              <img src={block.gif} className={styles.InfoBlock_Gif} />
            )}
            <div
              className={classNames(styles.InfoBlock_Text, {
                [styles.InfoBlock_FullText]: !block.gif,
              })}
            >
              {block.buttons && (
                <div className={styles.InfoBlock_Buttons}>
                  {block.buttons.map((button, index) => (
                    <button
                      className={classNames({
                        [styles.InfoBlock_Buttons_Active]: index === 0,
                      })}
                    >
                      {button}
                    </button>
                  ))}
                </div>
              )}
              <div className={styles.InfoBlock_Main}>
                <p>{block.title}</p>
                <span>{block.description}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Sui;
