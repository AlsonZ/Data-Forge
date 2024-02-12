"use client";
import CodeEditor from "@uiw/react-textarea-code-editor";
import type { KeyboardEvent, ChangeEvent } from "react";

import styles from "./codeViewer.module.css";

type Props = {
  value: string;
  placeholder: string;
  onKeyDown?:
    | ((event: KeyboardEvent<HTMLTextAreaElement>) => boolean | void)
    | undefined;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  style?: object;
};

const CodeViewer = (props: Props) => {
  const { value, placeholder, onKeyDown, onChange, style } = props;
  return (
    <CodeEditor
      value={value}
      data-color-mode="dark"
      language="json"
      placeholder={placeholder}
      onKeyDown={onKeyDown}
      onChange={onChange}
      className={styles.codeViewer}
    />
  );
};

export default CodeViewer;
