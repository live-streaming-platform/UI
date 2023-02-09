import { AppState } from '../store';
import {ChannelData} from "./types";


export const channelSelectors = {
    loadChannelData: (state: AppState): ChannelData | undefined =>
        state.channel.currentChannel,
};