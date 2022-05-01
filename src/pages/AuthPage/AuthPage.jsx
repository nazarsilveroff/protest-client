import React from "react";
import s from "./AuthPage.module.css";
import AuthForm from "../../modules/AuthForm";
import GoogleAuth from "../../modules/AuthForm/GoogleAuth";


function AuthPage(props) {

    return (
        <main className={s.authMain}>
            <div className={s.container}>
                <section className={s.titleSection}>
                    <h1 className={s.authTitle}>Pro Test</h1>
                    <p className={s.authDescription}>
                        <span className={s.boldSymbol}>&#91;</span> We will help you
                        find weak points in knowledge so that you can strengthen it. We will
                        show you what is relevant to know for a
                        <span className={s.boldSymbol}> QA Engineer</span> and will try
                        to make the learning process more diverse_
                        <span className={s.boldSymbol}>&#93;</span>
                    </p>
                </section>
                <section className={s.formSection}>
                    <div className={s.formWrapper}>
                        <p className={s.formDescription}>
                            You can use your Google Account to authorize:
                        </p>

                        <GoogleAuth styles={s.googleAuth}/>

                        <p className={s.formDescription}>
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
