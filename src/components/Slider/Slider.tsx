import { useCallback, useMemo, useState } from "react";
import { motion } from "framer-motion";
import styles from "./Slider.module.scss";
import { SLIDES } from "src/constants/slider";
import { RadialBorder } from "../RadialBorder";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const visibleSlides = useMemo(() => {
    const width = document.documentElement.clientWidth;
    return width >= 1200 ? 4 : width >= 550 ? 3 : 2;
  }, []);

  const slideWidth = useMemo(() => {
    return 100 / visibleSlides;
  }, [visibleSlides]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  return (
    <div className={styles.Slider}>
      <div className={styles.Slides_Container}>
        <motion.div
          className={styles.Slides}
          animate={{ x: `-${currentSlide * (100 / visibleSlides)}%` }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          {SLIDES.map((slide) => (
            <div
              key={slide.title}
              className={styles.Slide}
              style={{
                flex: `0 0 ${slideWidth}%`,
              }}
            >
              <RadialBorder
                className={styles.Slide_Wrapper}
                classNameContent={styles.Slide_Content}
              >
                <img
                  src={slide.image}
                  className={styles.Slide_Wrapper_Image}
                  alt=""
                />
                <div className={styles.Slide_Wrapper_Text}>
                  <p className={styles.Slide_Wrapper_Title}>{slide.title}</p>
                  <span className={styles.Slide_Wrapper_Description}>
                    {slide.description}
                  </span>
                </div>
              </RadialBorder>
            </div>
          ))}
        </motion.div>
      </div>
      <RadialBorder className={styles.PrevArrow} onClick={prevSlide}>
        {"<"}
      </RadialBorder>
      <RadialBorder className={styles.NextArrow} onClick={nextSlide}>
        {">"}
      </RadialBorder>
    </div>
  );
};

export default Slider;
