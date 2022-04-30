import React from "react";
import style from "./AuthPage.module.css";
import AuthForm from "../../modules/AuthForm";
import GoogleAuth from "../../modules/AuthForm/GoogleAuth";


function AuthPage(props) {

    return (
        <main className={style.authMain}>
            <div className={style.container}>
                <section className={style.titleSection}>
                    <h1 className={style.authTitle}>Pro Test</h1>
                    <p className={style.authDescription}>
                        <span className={style.boldSymbol}>&#91;</span> We will help you
                        find weak points in knowledge so that you can strengthen it. We will
                        show you what is relevant to know for a
                        <span className={style.boldSymbol}> QA Engineer</span> and will try
                        to make the learning process more diverse_
                        <span className={style.boldSymbol}>&#93;</span>
                    </p>
                </section>
                <section className={style.formSection}>
                    <div className={style.formWrapper}>
                        <p className={style.formDescription}>
                            You can use your Google Account to authorize:
                        </p>

                        <GoogleAuth styles={style.googleAuth}/>

                        <p className={style.formDescription}>
                            Or login to our using e-mail and password
                        </p>

                        <AuthForm/>

                    </div>
                </section>
            </div>
        </main>
    );
}

export default AuthPage;
