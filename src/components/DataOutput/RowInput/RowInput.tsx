import type { ChangeEvent } from "react";
import { useState } from "react";
import styles from "./RowInput.module.css";

const RowInput = ({ onClick }: { onClick: (rows: number) => void }) => {
  const max = 1000;
  const min = 1;
  const [rows, setRows] = useState<number>(min);

  const onButtonClick = () => {
    onClick(rows);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      const value = parseInt(e.target.value);
      if (value > max) {
        setRows(max);
      } else if (value < min) {
        setRows(min);
      } else {
        setRows(value);
      }
    } else {
      setRows(min);
    }
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
        className={styles.rowInput}
        value={rows}
        onChange={onChange}
      />
      <button className={styles.button} onClick={onButtonClick}>
        Generate
      </button>
    </div>
  );
};

export default RowInput;
