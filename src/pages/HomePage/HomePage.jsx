import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import styles from "./HomePage.module.css";

// AiOutlineArrowRight;

function HomePage(props) {
  return (
    <main className={styles.container}>
      <div className={styles.quote}>
        <p>“Regression testing. What is it?</p>
        <p>If the system compiles, that's good, if it boots, that's great!”</p>
      </div>

      <p className={styles.author}>Linus Torvalds</p>
      <p className={styles.details}>Linux kernel creator, hacker, 1969</p>

      <div className={styles.btnBox}>
        <Link to="/test" className={`${styles.btn} ${styles.btn1}`}>
          QA technical training <BsArrowRight className={styles.icon} />
        </Link>
        <Link to="/test" className={`${styles.btn} ${styles.btn2}`}>
          Testing theory
          <BsArrowRight className={styles.icon} />
        </Link>
      </div>
    </main>
  );
}

export default HomePage;
