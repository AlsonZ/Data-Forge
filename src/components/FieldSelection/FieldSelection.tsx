"use client";

import { useState } from "react";
import { CodeSelection } from "./CodeSelection/CodeSelection";
import InputSelection from "./InputSelection/InputSelection";
import styles from "./fieldSelection.module.css";

export default function FieldSelection() {
  const [showJSON, setShowJSON] = useState<boolean>(true);

  return (
    <div className={styles.container}>
      <div className={`${styles.navbar}`}>
        <button
          className={`${styles.button} ${showJSON ? styles.active : ""}`}
          onClick={() => {
            setShowJSON(true);
          }}
        >
          Json
        </button>
        <button
          className={`${styles.button} ${showJSON ? "" : styles.active}`}
          onClick={() => {
            setShowJSON(false);
          }}
        >
          Input
        </button>
      </div>
      {showJSON ? <CodeSelection /> : <InputSelection />}
    </div>
  );
}
