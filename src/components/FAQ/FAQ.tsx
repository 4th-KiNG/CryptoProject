import { AccordeonList } from "../AccordeonList";
import styles from "./FAQ.module.scss";

const items = [
  {
    id: "q1",
    title: "Question 1",
    content:
      "AnswerAnswerAnswerAnswerAnswerAnswerAnswerAnswerAnswerAnswerAnswerAnswerAnswerAnswerAnswer",
  },
  {
    id: "q2",
    title: "Question 2",
    content:
      "AnswerAnswerAnswerAnswerAnswerAnswerAnswerAnswerAnswerAnswerAnswerAnswerAnswerAnswerAnswerAnswerAnswerAnswerAnswerAnswerAnswerAnswerAnswerAnswerAnswerAnswerAnswer",
  },
];

const FAQ = () => {
  return (
    <div className={styles.Container}>
      <h2 className={styles.Title}>FAQ</h2>
      <AccordeonList items={items} />
    </div>
  );
};

export default FAQ;
