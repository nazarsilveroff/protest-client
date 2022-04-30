import React from 'react';
import {useField} from "formik";

function RadioField({label, fieldName, ...props}) {
    const [field, meta] = useField(props);
    return (
        <>
            <label>
                {label}
                <input {...field} {...props}  />
                {meta.touched && meta.error ? (
                    <p className="inputError">{meta.error}</p>
                ) : null}
            </label>
        </>
    );
}

export default RadioField;