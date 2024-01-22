import { CodeSelection } from "~/components/CodeSelection/CodeSelection";
import styles from "./index.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <div className={styles["top-section"]}>asd</div> */}
      <div className={styles["bottom-section"]}>
        <div className={styles["left-section"]}>
          <CodeSelection />
        </div>
        <div className={styles["right-section"]}></div>
      </div>
      {/* Top part section to checkbox and input fields */}
      {/* Bottom part is 2x, left for field in object form (the state really) */}
      {/* Right side is for the output JSON data */}
    </main>
  );
}
