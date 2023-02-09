import {ActionResult} from "../../utils/transaction/Transaction";
import {UserData} from "./types";

export enum UserActionType {
    ResetTransactions = 'user/reset-transactions',
    SignIn = 'user/sign-in',
    SignInResult = 'user/sign-in-result',
    SignOut = 'user/sign-out',
    Register = 'user/register',
    Refresh = 'user/refresh'
}

export type ResetTransactionsUserAction = {
    type: UserActionType.ResetTransactions;
};

export type SignOutUserAction = {
    type: UserActionType.SignOut;
}

export type SignInUserAction = {
    type: UserActionType.SignIn;
    payload: {
        username: string;
        password: string;
    };
};

export type SignInResultUserAction = {
    type: UserActionType.SignInResult;
    payload: ActionResult<UserData>;
};

export type RefreshUserAction = {
    type: UserActionType.SignInResult;
    payload: ActionResult<UserData>;
};

export type UserAction =
    | ResetTransactionsUserAction
    | SignInUserAction
    | SignInResultUserAction
    | RefreshUserAction
    | SignOutUserAction;

export const userActions = {
    resetTransactions: (): ResetTransactionsUserAction => ({
        type: UserActionType.ResetTransactions,
    }),
    signIn: (username: string, password: string): SignInUserAction => ({
        type: UserActionType.SignIn,
        payload: {username: username, password},
    }),
    signInResult: (result: ActionResult<UserData>): SignInResultUserAction => ({
        type: UserActionType.SignInResult,
        payload: result,
    }),
    logOut: () => ({
        type: UserActionType.SignOut
    }),
};