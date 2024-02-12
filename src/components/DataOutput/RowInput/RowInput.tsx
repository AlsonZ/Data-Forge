import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import styles from "./RowInput.module.css";

type Props = {
  onSubmitRows: (rows: number) => void;
};

const RowInput = ({ onSubmitRows }: Props) => {
  const max = 100; // Temp
  const min = 1;
  const [rows, setRows] = useState<number>(min);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (rows >= min && rows <= max) {
      onSubmitRows(rows);
    }
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value >= max) {
      setRows(max);
    } else {
      setRows(value);
    }
  };
  return (
    <form onSubmit={onSubmit}>
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
        <button className={styles.button} type="submit">
          Generate
        </button>
      </div>
    </form>
  );
};

export default RowInput;
