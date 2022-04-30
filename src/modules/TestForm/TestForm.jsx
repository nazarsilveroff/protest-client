import React from "react";
import s from "./TestForm.module.css";

function TestForm() {
  return (
    <div className={s.containerTest}>
      <p className={s.testQuestion}>
        question <span className={s.testNumber}>3</span> / 12
      </p>
      <h2 className={s.testText}>What is regression testing?</h2>
      <form>
        <label className={s.testLabel}>
          <input className={s.testInput} type="radio" name="answer" />
          <p className={s.testAnswer}>
            This is testing of the main functionality of the application
          </p>
        </label>
      </form>
    </div>
  );
}

export default TestForm;
