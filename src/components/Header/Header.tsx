import Link from "next/link";
import styles from "./header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <h1>
          <Link href="/">Data Forge</Link>
        </h1>
        <span>Create the perfect data for your needs!</span>
      </div>

      <div className={styles.links}>
        <Link className={styles.link} href="/faq">
          FAQ
        </Link>
      </div>
    </header>
  );
};
