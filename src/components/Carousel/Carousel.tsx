import { Slider } from "../Slider";
import styles from "./Carousel.module.scss";

const Carousel = () => {
  return (
    <div className={styles.Carousel}>
      <h2 className={styles.Title}>Heading</h2>
      <Slider />
    </div>
  );
};

export default Carousel;
