import {all, put, takeLatest} from "redux-saga/effects";
import {UserActionType} from "../user/actions";
import {ChannelAction, ChannelActionType, LoadChannelDataAction} from "./actions";


function* handleLoadChannel(action: LoadChannelDataAction) {
    const {username} = action.payload;


    yield put({type: ChannelActionType.LoadChannelData, })
}

export function* channelSaga(): Generator {
    yield all([
        takeLatest(ChannelActionType.LoadChannelData, handleLoadChannel),
    ]);
}