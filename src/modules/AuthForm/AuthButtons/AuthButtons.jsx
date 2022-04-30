import React from "react";
import style from "../../../pages/AuthPage/AuthPage.module.css";

function AuthButtons({setActiveBtn, activeBtn}) {


    const btnHandler = (e) => {
        const {id} = e.target

        switch (id) {
            case "signUpBtn":
                setActiveBtn("signUp")
                break;
            case "signInBtn":
                setActiveBtn("signIn")
                break;
            default:
                setActiveBtn("signUp")
        }

    }

    return (
        <div className={style.buttonWrapper}>
            <button id="signUpBtn"
                    type={activeBtn === "signUp" ?  "submit" : null}
                    className={`${style.btn} ${activeBtn === "signUp" ? style.active : style.default}`}
                    onClick={btnHandler}>
                sign up
            </button>
            <button id="signInBtn"
                    type={activeBtn === "signIn" ? "submit" : null}
                    className={`${style.btn} ${activeBtn === "signIn" ? style.active : style.default}`}
                    onClick={btnHandler}>
                sign in
            </button>
        </div>
    );
}

export default AuthButtons;