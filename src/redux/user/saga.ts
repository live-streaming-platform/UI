import {all, put, takeLatest} from 'redux-saga/effects';
import {
    SignInResultUserAction,
    SignInUserAction,
    userActions,
    UserActionType,
} from './actions';
import {authorize, getUserData, refreshToken as callRefreshToken} from "../../apis/arcade-api";
import {AxiosResponse} from "axios";
import {parseJwt} from "../../utils/jwt/parseJwt";
import {UserData} from "./types";

function* handleSignIn(action: SignInUserAction) {
    const {username, password} = action.payload;
    console.log("starting auth")
    const rs: AxiosResponse = yield authorize(username, password);
    let userData: UserData;
    if (rs.status === 200) {
        const {token, refreshToken} = yield rs.data;
        localStorage.setItem("jwtAccess", token);
        localStorage.setItem("jwtRefresh", refreshToken);
        console.log("Getting user data:" + token)
        let response: AxiosResponse = yield getUserData(token);

        userData = yield response.data;

        console.log("Got user data:" + JSON.stringify(userData));

    } else {
        const {title, message} = yield rs.data;
        yield put(
            userActions.signInResult({
                error: {
                    title: title,
                    message: message,
                },
            }),
        );
        return;
    }


    yield put(userActions.signInResult({error: undefined, ...userData}));
}

function* getToken() {
    let jwtToken = localStorage.getItem('jwtAccess');
    let jwtRefresh = localStorage.getItem("jwtRefresh");

    if (jwtToken && parseJwt(jwtToken).exp < new Date().getDate() && jwtRefresh) {
        const rs: AxiosResponse = yield callRefreshToken(jwtRefresh);

        const {token, refreshToken} = rs.data
        localStorage.setItem("jwtAccess", token);
        localStorage.setItem("jwtRefresh", refreshToken);
        return token;
    } else {
        yield put({type: UserActionType.SignOut});
    }
}

function* handleSignInResult(action: SignInResultUserAction): Generator {
    if (!action.payload.error) {
    }
}

export function* userSaga(): Generator {
    yield all([
        takeLatest(UserActionType.SignIn, handleSignIn),
        takeLatest(UserActionType.SignInResult, handleSignInResult),
    ]);
}