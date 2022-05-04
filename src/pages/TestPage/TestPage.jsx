import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import s from "./TestPage.module.css";

import { useDispatch, useSelector } from "react-redux";
import { getTypeOfTest } from "../../redux/test/test-selectors";
import TestSlider from "../../modules/TestSlider";
import testApi from "../../redux/test/test-api";
import { getAnswersOperation } from "../../redux/test/test-operations";
import Loader from "../../modules/Loader";

function TestPage() {
  const dispatch = useDispatch();
  const typeOfTest = useSelector(getTypeOfTest);

  const navigate = useNavigate();

  const [answers, setAnswers] = useState([]);

  const [questions, setQuestions] = useState({
    items: [],
    error: "",
    loading: true,
  });

  useEffect(() => {
    async function gettingQuestions(type) {
      setQuestions((prevState) => ({
        ...prevState,
        loading: true,
        error: "",
      }));
      try {
        const data = await testApi.getQuestions(type);
        setQuestions((prevState) => ({
          ...prevState,
          loading: false,
          items: data,
        }));
      } catch (err) {
        setQuestions((prevState) => ({
          ...prevState,
          loading: false,
          error: err.message,
        }));
      }
    }
    typeOfTest && gettingQuestions(typeOfTest);
  }, [typeOfTest]);

  const addAnswer = (newAnswer) => {
    const duplicate = answers.find(
      (answer) => answer.questionId === newAnswer.questionId
    );
    if (duplicate) {
      if (JSON.stringify(duplicate) === JSON.stringify(newAnswer)) {
        return;
      }
      setAnswers((prevState) => [
        ...prevState.filter((el) => el.questionId !== newAnswer.questionId),
        newAnswer,
      ]);
    } else {
      setAnswers((prevState) => [...prevState, newAnswer]);
    }
  };

  const completeTest = () => {
    dispatch(getAnswersOperation(answers));
    navigate("/results");
  };

  return (
    <main className={s.sectionTest}>
      <div className={s.container}>
        <div className={s.containerTitle}>
          <h2 className={s.testTheory}>
            [
            {typeOfTest === "tech" ? "QA technical training" : "Testing theory"}
            _]
          </h2>
          <Link to="/" className={s.testFinish}>
            Finish test
          </Link>
        </div>
        {questions.loading && <Loader />}
        <TestSlider
          questions={questions.items}
          callback={addAnswer}
          completeTest={completeTest}
        />
      </div>
    </main>
  );
}

export default TestPage;
