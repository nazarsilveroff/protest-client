import React, {useEffect, useState} from "react";
import {Form, Formik} from "formik";
import s from "./AuthForm.module.css";
import InputField from "../../shared/components/InputField";
import AuthButtons from "./AuthButtons";
import {
    signInValidationSchema,
    signUpValidationSchema,
} from "./validation/schema";
import {useDispatch} from "react-redux";
import {signInOperation, signUpOperation} from "../../redux/auth/auth-operations";

function AuthForm(props) {
    const signUp = {
        email: "",
        password: "",
        username: "",
    };
    const signIn = {
        email: "",
        password: "",
    };

    const dispatch = useDispatch()

    const [activeBtn, setActiveBtn] = useState("signUp");

    const [inputValues, setInputValues] = useState(signUp);

    useEffect(() => {
        activeBtn === "signIn" ? setInputValues(signIn) : setInputValues(signUp);
    }, [activeBtn]);
    return (
        <Formik
            enableReinitialize
            validationSchema={
                activeBtn === "signUp" ? signUpValidationSchema : signInValidationSchema
            }
            initialValues={inputValues}
            onSubmit={(values) => {
                activeBtn === "signUp" ? dispatch(signUpOperation(values)) : dispatch(signInOperation(values))
            }}
        >
            {({isSubmitting}) => (
                <Form className={s.form}>
                    {activeBtn === "signUp" ? (
                        <InputField
                            styles={{input: s.input, label: s.label}}
                            type="text"
                            name="username"
                            placeholder="Nickname"
                        />
                    ) : null}

                    <InputField
                        styles={{input: s.input, label: s.label}}
                        type="email"
                        name="email"
                        placeholder="E-mail"
                    />

                    <InputField
                        styles={{input: s.input, label: s.label}}
                        type="password"
                        name="password"
                        placeholder="Password"
                    />

                    <AuthButtons setActiveBtn={setActiveBtn} activeBtn={activeBtn}/>
                </Form>
            )}
        </Formik>
    );
}

export default AuthForm;
