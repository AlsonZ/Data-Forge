import FieldSelection from "~/components/FieldSelection/FieldSelection";
import styles from "./index.module.css";
import { DataOutput } from "~/components/DataOutput/DataOutput";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <div className={styles["top-section"]}>asd</div> */}
      <div className={styles["bottom-section"]}>
        <div className={styles["left-section"]}>
          <FieldSelection />
        </div>
        <div className={styles["right-section"]}>
          <DataOutput />
        </div>
      </div>
      {/* Top part section to checkbox and input fields */}
      {/* Bottom part is 2x, left for field in object form (the state really) */}
      {/* Right side is for the output JSON data */}
    </main>
  );
}
