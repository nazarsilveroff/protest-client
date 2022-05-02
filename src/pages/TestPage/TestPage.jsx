import React, { useState } from "react";
import { Link } from "react-router-dom";
import TestForm from "../../modules/TestForm/TestForm";
import s from "./TestPage.module.css";
import Icons from "../../images/icons.svg";

function TestPage({ questions }) {
  // Кнопка "Назад" отключена
  const [isDisabledBackBtn, setIsDisabledBackBtn] = useState(true);
  // Кнопка "Вперед" отключена
  const [isDisabledForwardBtn, setIsDisabledForwardBtn] = useState(true);
  // номер вопроса
  const [questionNumber, setQuestionNumber] = useState(1);

  // увеличить номер вопроса
  const increaseQuestionNumber = () => {
    setQuestionNumber(questionNumber + 1);
  };

  // уменьшить номер вопроса
  const decreaseQuestionNumber = () => {
    setQuestionNumber(questionNumber - 1);
  };

  // Отключить кнопки
  const isDisableButtons = () => {
    // если questions = null чтобы не было ошибки
    if (!questions) {
      return;
    }

    // Кнопка "Вперед"  - disable
    if (!questions[questionNumber - 1]) {
      setIsDisabledForwardBtn(true);
    }

    if (questions[questionNumber - 1]) {
      setIsDisabledForwardBtn(false);
    }

    // Кнопка "Назад" - disable
    if (questionNumber === 1) {
      setIsDisabledBackBtn(true);
    }

    if (questionNumber > 1) {
      setIsDisabledBackBtn(false);
    }
  };

  return (
    <section className={s.sectionTest}>
      <div className={s.container}>
        <div className={s.containerTitle}>
          <h2 className={s.testTheory}>[{}_]</h2>
          <Link to="/" className={s.testFinish}>
            Finish test
          </Link>
        </div>
        <TestForm questionNumber={questionNumber} />
        <div className={s.containerButton}>
          <button
            type="button"
            className={s.testButton}
            onClick={decreaseQuestionNumber}
          >
            <svg className={s.testArrow} width="24px" height="16">
              <use xlinkHref={`${Icons}#icon-arrow-left`}></use>
            </svg>
            <span className={s.buttonText}>Next question</span>
          </button>
          <button
            type="button"
            className={s.testButton}
            onClick={increaseQuestionNumber}
          >
            <span className={s.buttonText}>Previous question</span>
            <svg className={s.testArrow} width="24px" height="16">
              <use xlinkHref={`${Icons}#icon-arrow-right`}></use>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default TestPage;
