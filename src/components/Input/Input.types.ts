import React from "react";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  startIcon?: string;
  fieldClassName?: string;
  [key: string]: unknown; // Добавляем поддержку всех пропсов для анимации
};
