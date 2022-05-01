import React from 'react';
import {Outlet, Navigate} from "react-router-dom";
import useAuth from "../../../shared/hooks/useAuth";

function PublicRoute(props) {
    const isLogin = useAuth();

    if (isLogin) {
        return <Navigate to="/"/>
    }
    return <Outlet/>
}

export default PublicRoute;