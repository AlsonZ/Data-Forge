import type { InputHTMLAttributes, LabelHTMLAttributes } from "react";
import styles from "./input.module.css";

type Props = {
  label?: LabelHTMLAttributes<HTMLLabelElement>["children"];
  labelClassName?: LabelHTMLAttributes<HTMLLabelElement>["className"];
  extraLabelProps?: LabelHTMLAttributes<HTMLLabelElement>;
  id?: InputHTMLAttributes<HTMLInputElement>["id"];
  name?: InputHTMLAttributes<HTMLInputElement>["name"];
  type?: InputHTMLAttributes<HTMLInputElement>["type"];
  value?: InputHTMLAttributes<HTMLInputElement>["value"];
  onChange?: InputHTMLAttributes<HTMLInputElement>["onChange"];
  placeholder?: InputHTMLAttributes<HTMLInputElement>["placeholder"];
  inputClassName?: InputHTMLAttributes<HTMLInputElement>["className"];
  extraInputProps?: InputHTMLAttributes<HTMLInputElement>;
};

export default function Input({
  label,
  extraLabelProps,
  labelClassName,
  id,
  name,
  type,
  value,
  onChange,
  placeholder,
  inputClassName,
  extraInputProps,
}: Props) {
  return (
    <>
      {label && (
        <label
          htmlFor={id}
          className={`${styles.label} ${labelClassName}`}
          {...extraLabelProps}
        >
          {label}
        </label>
      )}
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`${styles.input} ${inputClassName}`}
        {...extraInputProps}
      />
    </>
  );
}
