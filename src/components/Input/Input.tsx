import classNames from "classnames";
import { MotionRadialBorder } from "../RadialBorder";
import styles from "./Input.module.scss";
import type { InputProps } from "./Input.types";

const Input = ({ startIcon, fieldClassName, ...props }: InputProps) => {
  return (
    <MotionRadialBorder
      className={classNames(fieldClassName, styles.Container)}
      {...props}
    >
      {startIcon && (
        <img
          src={startIcon}
          alt="start input icon"
          className={styles.StartIcon}
        />
      )}
      <input
        type="text"
        {...props}
        className={classNames(props.className, styles.InputField)}
      />
    </MotionRadialBorder>
  );
};

export default Input;
