"use client";
import { useState } from "react";
import styles from "./question.module.css";
import CodeView from "../CodeView/CodeView";

type QuestionProps = {
  heading: string;
  answer: string;
  codeExample?: string;
};

export const Question = ({ heading, answer, codeExample }: QuestionProps) => {
  const [active, setActive] = useState<boolean>(false);
  const onClick = () => {
    setActive((prevState) => !prevState);
  };
  return (
    <div className={styles.question}>
      <button
        className={styles.questionButton}
        onClick={onClick}
        aria-expanded={active}
      >
        <h3 className={styles.questionHeading}>{heading}</h3>
        <div className={`${styles.cross} ${active ? styles.crossActive : ""}`}>
          <div
            className={`${styles.crossLine} ${styles.crossLineHorizontal}`}
          />
          <div className={`${styles.crossLine} ${styles.crossLineVertical}`} />
        </div>
      </button>
      <div
        className={`${styles.answerContainer} ${
          active ? styles.answerActive : ""
        }`}
      >
        <p className={styles.answer}>{answer}</p>
        {codeExample && <CodeView>{codeExample}</CodeView>}
      </div>
    </div>
  );
};
