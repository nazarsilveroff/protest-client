import React from 'react';
import GoogleLogin from "react-google-login";
import {googleOAuthOperation} from "../../../redux/auth/auth-operations";
import {useDispatch} from "react-redux";

function GoogleAuth({styles}) {
    const dispatch = useDispatch()

    const CLIENT_ID = process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID

    const handleLogin = async googleData => {
        const token = googleData.tokenId
        dispatch(googleOAuthOperation({token}))
    }

    return (
        <GoogleLogin
            clientId={CLIENT_ID}
            buttonText="Google"
            onSuccess={handleLogin}
            onFailure={handleLogin}
            cookiePolicy={'single_host_origin'}
            className={styles}
        />
    );
}

export default GoogleAuth;