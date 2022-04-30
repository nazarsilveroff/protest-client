import React from 'react';
import GoogleLogin from "react-google-login";
import axios from "axios";

function GoogleAuth({styles}) {
    const URL = `http://localhost:3001/api/auth/google`
    const CLIENT_ID = `997341739538-uk7se1vgnr5kn1q3f1lbsprrrh9dmgqs.apps.googleusercontent.com`

    const handleLogin = async googleData => {
        const {data} = await axios.post(URL, {token: googleData.tokenId})
        return data
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