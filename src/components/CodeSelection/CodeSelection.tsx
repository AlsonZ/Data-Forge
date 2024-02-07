"use client";
import type { FieldsType } from "~/store/fields";
import { useRef, useState, useEffect } from "react";
import type { ChangeEvent } from "react";
import { useFieldStore } from "~/store/fields";
import styles from "./codeSelection.module.css";
import CodeViewer from "../CodeViewer/CodeViewer";

export const CodeSelection = () => {
  // const codeEditorRef = useRef<HTMLTextAreaElement>(null);
  const [error, setError] = useState<string | null>(null);
  const { fields, setFields } = useFieldStore((state) => ({
    fields: state.fields,
    setFields: state.setFields,
  }));
  const [codeValue, setCodeValue] = useState<string>(``);

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
      <div className={styles.errorContainer}>
        {error && <p className={styles.error}>{error}</p>}
      </div>
      <CodeViewer
        value={codeValue}
        placeholder="Please enter JSON code."
        onChange={onChange}
      />
    </>
  );
};
