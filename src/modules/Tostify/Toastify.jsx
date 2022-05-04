import React, {useEffect} from 'react';
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useSelector} from "react-redux";
import {getErrorMassage} from "../../redux/auth/auth-selectors";

function Toastify({errFromParentState}) {
    const errFromAuthReduxState = useSelector(getErrorMassage)

    useEffect(() => {
        const notify = (massage) => toast.error(massage, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        errFromAuthReduxState && notify(errFromAuthReduxState)
        errFromParentState && notify(errFromParentState)
    }, [errFromAuthReduxState,errFromParentState])


    return (
        <div>
            <ToastContainer/>
        </div>
    );
}

export default Toastify;