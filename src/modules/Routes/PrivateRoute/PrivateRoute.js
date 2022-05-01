import React from 'react';
import useAuth from "../../../shared/hooks/useAuth";
import {useLocation} from "react-router";
import {Outlet, Navigate} from "react-router-dom";

function PrivateRoute(props) {
    const isLogin = useAuth();

    const location = useLocation();

    if (!isLogin) {
        return <Navigate to="auth" state={{from: location}}/>
    }
    return <Outlet/>
}

export default PrivateRoute;