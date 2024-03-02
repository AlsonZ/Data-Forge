import styles from "./faq.module.css";
import { Question } from "~/components/Question/Question";

const questions = [
  {
    heading: "How do I generate a field?",
    answer: `Create an Array in the left code editor section. Then insert objects with the keys required for your specific field type.`,
  },
  {
    heading: "How do I generate a first name?",
    answer: "Here is an example to generate a first name field. ",
    codeExample:
      '[{\n  "fieldName": "first_name",\n  "type": "firstName",\n  "min": 5,\n  "max": 15\n}]',
  },
  {
    heading: "What keys are available for me to use?",
    answer: `The keys that are available to be used are: 
    "fieldName"
    "type"
    "min"
    "max
If "min" and "max" are not supplied, they will use their default value.`,
  },
  {
    heading: "What types are available for me to use?",
    answer: `The current types that are available to be used are:
    "firstName": Generate a random first name
    "lastName": Generate a random last name
    "fullName": Generate a random full name
    "password": Generate a random password
    "mobileNumber": Generate a random 10 digit number
    "number": Generate a random number. Defaults to between 1 and 1 trillion
    "string": Generate a random string. Defaults to between 1 and 20 letters `,
  },
];

export default function Faq() {
  return (
    <div className={styles.main}>
      <div className={styles.headingContainer}>
        <h1 className={styles.heading}>FAQ</h1>
        <span className={styles.subHeading}>
          Answers to common questions you may have.
        </span>
      </div>
      <div className={styles.questionList}>
        {questions.map((props, index) => (
          <Question {...props} key={props.heading + index} />
        ))}
      </div>
    </div>
  );
}
