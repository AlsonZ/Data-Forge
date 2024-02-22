"use client";
import { useState } from "react";
import styles from "./question.module.css";

type QuestionType = {
  heading: string;
  answer: string;
};

export const Question = ({ heading, answer }: QuestionType) => {
  const [active, setActive] = useState<boolean>(false);
  const onClick = () => {
    setActive((prevState) => !prevState);
  };
  return (
    <div className={styles.question} onClick={onClick}>
      <h3 className={styles.questionHeading}>
        {heading}
        <div className={`${styles.cross} ${active ? styles.crossActive : ""}`}>
          <div
            className={`${styles.crossLine} ${styles.crossLineHorizontal}`}
          />
          <div className={`${styles.crossLine} ${styles.crossLineVertical}`} />
        </div>
      </h3>
      <div
        className={`${styles.answerContainer} ${
          active ? styles.answerActive : ""
        }`}
      >
        <p className={styles.answer}>{answer}</p>
      </div>
    </div>
  );
};
