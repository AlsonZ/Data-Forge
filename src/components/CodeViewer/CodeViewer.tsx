"use client";
import CodeEditor from "@uiw/react-textarea-code-editor";
import {
  backgroundColour,
  secondaryColour,
  textColour,
} from "~/styles/globals";
import type { KeyboardEvent, ChangeEvent } from "react";

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
      style={{
        backgroundColor: backgroundColour,
        color: textColour,
        fontSize: 16,
        fontFamily:
          "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
        border: "1px solid",
        borderColor: secondaryColour,
        borderRadius: 8,
        height: "100%",
      }}
    />
  );
};

export default CodeViewer;
