import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { useDispatch } from "react-redux";

import { getTypeTest } from "../../redux/test/test-operations";

import s from "./HomePage.module.css";

function HomePage(props) {
  const dispatch = useDispatch();

  const onClick = (typeOfTest) => {
    dispatch(getTypeTest(typeOfTest));
  };
  return (
    <main className={s.container}>
      <div className={s.quote}>
        <p>“Regression testing. What is it?</p>
        <p>If the system compiles, that's good, if it boots, that's great!”</p>
      </div>

      <p className={s.author}>Linus Torvalds</p>
      <p className={s.details}>Linux kernel creator, hacker, 1969</p>

      <div className={s.btnBox}>
        <Link
          to="/test"
          className={`${s.btn} ${s.btn1}`}
          onClick={() => onClick("tech")}
        >
          <span className={s.testName}>QA technical training</span>
          <BsArrowRight className={s.icon} />
        </Link>
        <Link
          to="/test"
          className={`${s.btn} ${s.btn2}`}
          onClick={() => onClick("theory")}
        >
          <span className={s.testName}>Testing theory</span>
          <BsArrowRight className={s.icon} />
        </Link>
      </div>
    </main>
  );
}

export default HomePage;
