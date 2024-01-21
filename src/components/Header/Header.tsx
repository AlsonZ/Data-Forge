import Link from "next/link";
import styles from "./header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1>
        <Link href="/">Data Forge</Link>
      </h1>
      <span>The perfect data for your projects!</span>
    </header>
  );
};
