"use client";
import UIWCodeEditor from "@uiw/react-textarea-code-editor";
import type { KeyboardEvent, ChangeEvent } from "react";
import styles from "./codeEditor.module.css";

type Props = {
  value: string;
  placeholder: string;
  onKeyDown?:
    | ((event: KeyboardEvent<HTMLTextAreaElement>) => boolean | void)
    | undefined;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  style?: object;
  className?: string;
};

const CodeEditor = (props: Props) => {
  const { value, placeholder, onKeyDown, onChange, style, className } = props;
  return (
    <UIWCodeEditor
      value={value}
      data-color-mode="dark"
      language="json"
      placeholder={placeholder}
      onKeyDown={onKeyDown}
      onChange={onChange}
      style={style}
      className={`code-editor-syntax-styling ${styles.codeViewer} ${className}`}
    />
  );
};

export default CodeEditor;
