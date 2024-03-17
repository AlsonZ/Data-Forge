"use client";

import { useState } from "react";
import { CodeSelection } from "./CodeSelection/CodeSelection";
import InputSelection from "./InputSelection/InputSelection";
import styles from "./fieldSelection.module.css";
import Button from "../Button/Button";

export default function FieldSelection() {
  const [showJSON, setShowJSON] = useState<boolean>(true);

  return (
    <div className={styles.container}>
      <div className={`${styles.navbar}`}>
        <Button
          className={`${showJSON ? styles.active : styles.inactive}`}
          onClick={() => {
            setShowJSON(true);
          }}
        >
          Json
        </Button>
        <Button
          className={`${showJSON ? styles.inactive : styles.active}`}
          onClick={() => {
            setShowJSON(false);
          }}
        >
          Input
        </Button>
      </div>
      {showJSON ? <CodeSelection /> : <InputSelection />}
    </div>
  );
}
