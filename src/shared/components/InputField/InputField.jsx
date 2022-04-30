import React from 'react';
import {useField} from "formik";

function InputField({label, fieldName, ...props}) {
    const [field, meta] = useField(props);
    const {styles} = props
    return (
        <>
            <label className={styles.label}>
                {label}
                <input {...field} {...props} className={styles.input}/>
                {meta.touched && meta.error ? (
                    <p className="inputError">{meta.error}</p>
                ) : null}
            </label>
        </>
    );
}

export default InputField;