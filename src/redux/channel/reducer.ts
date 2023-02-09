import {ChannelData} from './types';
import {ChannelAction, ChannelActionType} from "./actions";

export type ChannelState = {
    currentChannel?: ChannelData;
};

const initialState: ChannelState = {
    currentChannel: undefined,
};

export default function channelReducer(state: ChannelState = initialState, action: ChannelAction): ChannelState {
    switch (action.type) {
        case ChannelActionType.LoadChannelDataResult:
            const {payload} = action;
            return {...state, currentChannel: payload};
        default:
            return state;
    }
}