import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import styles from "./rowInput.module.css";
import Input from "~/components/Input/Input";

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
        <Input
          label="Rows:"
          id="row"
          name="row"
          type="number"
          inputClassName={styles.rowInput}
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
