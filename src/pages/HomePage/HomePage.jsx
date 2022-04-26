import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { useDispatch } from "react-redux";

import { getTypeTest } from "../../redux/test/test-operations";

import styles from "./HomePage.module.css";

function HomePage(props) {
  const dispatch = useDispatch();

  const onClick = (typeOfTest) => {
    dispatch(getTypeTest(typeOfTest));
  };
  return (
    <main className={styles.container}>
      <div className={styles.quote}>
        <p>“Regression testing. What is it?</p>
        <p>If the system compiles, that's good, if it boots, that's great!”</p>
      </div>

      <p className={styles.author}>Linus Torvalds</p>
      <p className={styles.details}>Linux kernel creator, hacker, 1969</p>

      <div className={styles.btnBox}>
        <Link
          to="/test"
          className={`${styles.btn} ${styles.btn1}`}
          onClick={() => onClick("tech")}
        >
          QA technical training <BsArrowRight className={styles.icon} />
        </Link>
        <Link
          to="/test"
          className={`${styles.btn} ${styles.btn2}`}
          onClick={() => onClick("theory")}
        >
          Testing theory
          <BsArrowRight className={styles.icon} />
        </Link>
      </div>
    </main>
  );
}

export default HomePage;
