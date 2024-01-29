"use client";
import type { FieldsType } from "~/store/fields";
import { useRef, type ChangeEvent, useState, useEffect } from "react";
import { useFieldStore } from "~/store/fields";
import CodeEditor from "@uiw/react-textarea-code-editor";
import { backgroundColour, secondaryColour } from "~/styles/globals";
import styles from "./codeSelection.module.css";

export const CodeSelection = () => {
  const codeEditorRef = useRef<HTMLTextAreaElement>(null);
  const [error, setError] = useState<string | null>(null);
  const { fields, setFields } = useFieldStore((state) => ({
    fields: state.fields,
    setFields: state.setFields,
  }));
  const [codeValue, setCodeValue] = useState<string>(`
  [
    {
      "fieldName": "example_field",
      "type": "string",
      "min": 5,
      "max": 20
    },
  ]`);

  useEffect(() => {
    setCodeValue(JSON.stringify(fields, null, 2));
  }, [fields]);

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    try {
      const parseFields = JSON.parse(e.target.value) as FieldsType;
      setFields(parseFields);
      setError("");
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      }
    }
  };
  return (
    <>
      {error && <p className={styles.error}>{error}</p>}
      <CodeEditor
        ref={codeEditorRef}
        value={codeValue}
        language="json"
        placeholder="Please enter JSON code."
        onChange={onChange}
        style={{
          backgroundColor: backgroundColour,
          fontSize: 16,
          fontFamily:
            "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
          border: "1px solid",
          borderColor: secondaryColour,
          borderRadius: 8,
          height: "100%",
        }}
      />
    </>
  );
};
