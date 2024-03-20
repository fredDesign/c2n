import { FunctionComponent } from "react";
import PatternMatcher from "./PatternMatcher";
import styles from "./Section.module.css";

const Section: FunctionComponent = () => {
  return (
    <section className={styles.section}>
      <div className={styles.dataMapperWrapper}>
        <img className={styles.dataMapperIcon} alt="" src="/vector-8.svg" />
      </div>
      <PatternMatcher />
      <div className={styles.vectorWrapper}>
        <img className={styles.vectorIcon} alt="" src="/vector-14.svg" />
      </div>
    </section>
  );
};

export default Section;
