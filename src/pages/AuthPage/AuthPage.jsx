import React from "react";
// import { useDispatch } from "react-redux";
import { useLocation } from "react-router";
import { ErrorMessage, Field, Form, Formik } from "formik";
import style from "./AuthPage.module.css";

const registrationValues = {
  email: "",
  password: "",
  username: "",
};
const loginValues = {
  email: "",
  password: "",
};
function AuthPage(props) {
  const location = useLocation();
  // const dispatch = useDispatch();
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
            <button type="button" className={style.googleBtn}>
              <b>Google</b>
            </button>
            <p className={style.formDescription}>
              Or login to our using e-mail and password
            </p>
            <Formik
              initialValues={
                location.pathname === "/registration"
                  ? registrationValues
                  : loginValues
              }
              onSubmit={(values) => {
                //   ? dispatch(registerOperations(values))
                //   : dispatch(loginOperations(values));
              }}
            >
              <Form className={style.form}>
                <>
                  <label>
                    <Field
                      type="text"
                      name="username"
                      placeholder="Nickname"
                      className={style.input}
                    />
                    <ErrorMessage name="username" component="div" />
                  </label>
                  <label>
                    <Field
                      type="email"
                      name="email"
                      placeholder="E-mail"
                      className={style.input}
                    />
                    <ErrorMessage name="email" component="div" />
                  </label>
                  <label>
                    <Field
                      type="password"
                      name="password"
                      placeholder="Password"
                      className={style.input}
                    />
                    <ErrorMessage name="password" component="div" />
                  </label>
                  <div className={style.buttonWrapper}>
                    <button type="submit" className={style.buttonSignUp}>
                      sign up
                    </button>
                    <button type="submit" className={style.buttonSignIn}>
                      sign in
                    </button>
                  </div>
                </>
              </Form>
            </Formik>
          </div>
        </section>
      </div>
    </main>
  );
}

export default AuthPage;
