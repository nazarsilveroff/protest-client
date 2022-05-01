import React, {useEffect, useState} from 'react';
import {Form, Formik} from "formik";
import style from "../../pages/AuthPage/AuthPage.module.css";
import InputField from "../../shared/components/InputField";
import AuthButtons from "./AuthButtons";
import {signInValidationSchema, signUpValidationSchema} from "./validation/schema";

function AuthForm(props) {
    const signUp = {
        email: "",
        password: "",
        username: "",
    }
    const signIn = {
        email: "",
        password: "",
    }

    const [activeBtn, setActiveBtn] = useState("signUp")

    const [inputValues, setInputValues] = useState(signUp)

    useEffect(() => {
        activeBtn === "signIn" ? setInputValues(signIn) : setInputValues(signUp)
    }, [activeBtn])
    return (
        <Formik
            enableReinitialize
            validationSchema={activeBtn === "signUp" ? signUpValidationSchema : signInValidationSchema}
            initialValues={inputValues}
            onSubmit={(values) => {

            }}
        >
            {({isSubmitting}) => (
                <Form className={style.form}>

                    {activeBtn === "signUp"
                        ? <InputField styles={{input: style.input, label: style.label}}
                                      type="text"
                                      name="username"
                                      placeholder="Nickname"/>
                        : null}

                    <InputField styles={{input: style.input, label: style.label}}
                                type="email" name="email"
                                placeholder="E-mail"/>

                    <InputField styles={{input: style.input, label: style.label}}
                                type="password"
                                name="password"
                                placeholder="Password"/>

                    <AuthButtons setActiveBtn={setActiveBtn} activeBtn={activeBtn} />

                </Form>
            )}
        </Formik>
    );
}

export default AuthForm;