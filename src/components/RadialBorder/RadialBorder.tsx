import type { PropsWithChildren } from "react";
import styles from "./RadialBorder.module.scss";
import classNames from "classnames";
import { motion } from "framer-motion";

type RadialBorderProps = PropsWithChildren & {
  className?: string;
  classNameContent?: string;
  [key: string]: unknown; // Добавляем поддержку всех пропсов для анимации
};

const RadialBorder = ({
  children,
  className,
  classNameContent,
  ...props
}: RadialBorderProps) => {
  return (
    <div className={classNames(styles.GlowBox, className)} {...props}>
      <div className={classNames(styles.GlowContent, classNameContent)}>
        {children}
      </div>
    </div>
  );
};

export const MotionRadialBorder = motion(RadialBorder);

export default RadialBorder;
