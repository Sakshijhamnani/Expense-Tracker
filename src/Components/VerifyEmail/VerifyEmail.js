import React, { useEffect } from 'react';
import classes from './VerifyEmail.module.css'

const VerifyEmail = () => {
    useEffect(() => {
        const token = localStorage.getItem("token");
        console.log('verify Email',token)
        if (!token) {
            console.error("Token is undefined or null");
            return;
        }

        fetch(
            "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyCyzE7q_jL2tqmuLQQXUYBsDY2OgHdHd0E",
            {
                method: "POST",
                body: JSON.stringify({
                    requestType: "VERIFY_EMAIL",
                    idToken: token,
                }),
                headers: {
                    "content-type": "application/json",
                },
            }
        )
        .then((res) => {
            if (res.ok) {
                console.log("Request successful");
                return res.json();
            } else {
                return res.json().then((data) => {
                    let errorMessage = "Authentication Failed";
                    throw new Error(errorMessage);
                });
            }
        })
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            console.error("Error sending verification email:", err);
        });
    }, []);

    return (
        <div className={classes.div}>Verification link is sent to your email</div>
    );
}

export default VerifyEmail;
