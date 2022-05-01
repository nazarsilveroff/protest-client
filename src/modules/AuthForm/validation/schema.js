import * as Yup from "yup";

export const signUpValidationSchema = Yup.object().shape({
    username: Yup.string().required("Field is Required!"),
    email: Yup.string().required("Field is Required!"),
    password: Yup.string().min(8).required("Field is Required!"),
});
export const signInValidationSchema = Yup.object().shape({
    email: Yup.string().required("Field is Required!"),
    password: Yup.string().min(8).required("Field is Required!"),
});