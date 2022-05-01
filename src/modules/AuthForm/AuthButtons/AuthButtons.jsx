import React from "react";
import s from "./AuthButtons.module.css";

function AuthButtons({ setActiveBtn, activeBtn }) {
  const btnHandler = (e) => {
    const { id } = e.target;

    switch (id) {
      case "signUpBtn":
        setActiveBtn("signUp");
        break;
      case "signInBtn":
        setActiveBtn("signIn");
        break;
      default:
        setActiveBtn("signUp");
    }
  };

  return (
    <div className={s.buttonWrapper}>
      <button
        id="signUpBtn"
        type={activeBtn === "signUp" ? "submit" : null}
        className={`${s.btn} ${activeBtn === "signUp" ? s.active : s.default}`}
        onClick={btnHandler}
      >
        sign up
      </button>
      <button
        id="signInBtn"
        type={activeBtn === "signIn" ? "submit" : null}
        className={`${s.btn} ${activeBtn === "signIn" ? s.active : s.default}`}
        onClick={btnHandler}
      >
        sign in
      </button>
    </div>
  );
}

export default AuthButtons;
