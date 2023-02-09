import React, {FormEvent, useState} from 'react';
import './style.css';
import {useDispatch, useSelector} from "react-redux";
import {userSelectors} from "../../../redux/user/selectors";
import {userActions} from "../../../redux/user/actions";
import Input from "../../inputs/Input/Input";
import Button from "../../buttons/Button/Button";

const SignInNestedForm = () => {
    const dispatch = useDispatch();
    const signInTransaction = useSelector(userSelectors.signInTransaction);
    const signInError = signInTransaction.error;

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const handleChangeRemoveError = (changeFunc: Function) => {
        changeFunc()
        if (signInError) {
            dispatch(userActions.resetTransactions())
        }
    }

    const handleSubmit = (event: FormEvent): void => {
        event.preventDefault();
        dispatch(userActions.signIn(username, password));
    };

    return (
        <form className={"auth-form"}>
            <div className={"auth-form__header"}>
                <p> Welcome to Arcade!</p>
            </div>
            <div className={'form-group'}>
                <Input type={'text'} placeholder={'Username'} handleChange={(event: any) => handleChangeRemoveError(() => setUsername(event))}/>
                <Input type={'password'} placeholder={'Password'} handleChange={(event: any) => handleChangeRemoveError(() => setPassword(event))}/>
                <p className={'form-error'}>{signInError?.message}</p>
            </div>

            <Button text={'LOGIN'} onClick={handleSubmit}/>

        </form>
    );
};

export default SignInNestedForm;