import {ChannelData} from "./types";

export enum ChannelActionType {
    LoadChannelData = 'channel/load-data',
    LoadChannelDataResult = 'channel/load-data-result',
}

export type LoadChannelDataAction = {
    type: ChannelActionType.LoadChannelData,
    payload: {
        username: string
    }
};

export type LoadChannelDataResultAction = {
    type: ChannelActionType.LoadChannelDataResult,
    payload: ChannelData
};

export type ChannelAction =
    | LoadChannelDataAction
    | LoadChannelDataResultAction

export const userActions = {

    loadChannelData: (username: string): LoadChannelDataAction => ({
        type: ChannelActionType.LoadChannelData,
        payload: {username: username},
    }),
    signInResult: (result: ChannelData): LoadChannelDataResultAction => ({
        type: ChannelActionType.LoadChannelDataResult,
        payload: result,
    }),
};