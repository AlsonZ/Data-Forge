import type { ChangeEvent } from "react";
import { useState } from "react";
import styles from "./RowInput.module.css";

const RowInput = () => {
  const [rows, setRows] = useState<number>();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRows(parseInt(e.target.value));
  };
  return (
    <div className={styles.container}>
      <label htmlFor="row" className={styles.label}>
        Rows:
      </label>
      <input
        id="row"
        name="row"
        type="number"
        max={"50"}
        className={styles.rowInput}
        value={rows}
        onChange={onChange}
      />
    </div>
  );
};

export default RowInput;
