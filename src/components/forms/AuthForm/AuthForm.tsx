import React from 'react';
import './style.css'
import SignInNestedForm from "../SignInNestedForm/SignInNestedForm";

const AuthForm = () => {
    return (
        <div style={{width: "430px"}}>
            <SignInNestedForm/>
        </div>
    );
};

export default AuthForm;