import React from 'react';
import GoogleLogin from "react-google-login";
import {googleOAuthOperation} from "../../../redux/auth/auth-operations";
import {useDispatch} from "react-redux";

function GoogleAuth({styles}) {
    const dispatch = useDispatch()

    const CLIENT_ID = `997341739538-uk7se1vgnr5kn1q3f1lbsprrrh9dmgqs.apps.googleusercontent.com`

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