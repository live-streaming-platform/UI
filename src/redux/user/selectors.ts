import { AppState } from '../store';
import { UserData } from './types';
import {Transaction} from "../../utils/transaction/Transaction";


export const userSelectors = {
    currentUser: (state: AppState): UserData | undefined =>
        state.user.currentUser,
    signInTransaction: (state: AppState): Transaction =>
        state.user.signInTransaction,
};