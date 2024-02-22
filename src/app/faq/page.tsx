import styles from "./faq.module.css";
import { Question } from "~/components/Question/Question";

export default function Faq() {
  return (
    <div className={styles.main}>
      <div className={styles.headingContainer}>
        <h1 className={styles.heading}>FAQ</h1>
        <span className={styles.subHeading}>
          Answers to common questions you may have.
        </span>
      </div>
      <div>
        <Question heading="Question 1" answer="Answer to question 1." />
      </div>
    </div>
  );
}
