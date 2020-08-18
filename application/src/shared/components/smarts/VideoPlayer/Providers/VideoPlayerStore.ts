import { fromJS } from "immutable";

export type VideoPlayerStoreType = {
	playing: boolean;
	loadingVideo: boolean;
	muted: boolean;
	percentage: number;
	bufferPercentage: number;
	speed: number;
	isFullScreen: boolean;
	time: {
		duration: number;
		current: number;
	};
};

const initialState: VideoPlayerStoreType = {
	playing: false,
	loadingVideo: false,
	muted: false,
	percentage: 0,
	bufferPercentage: 0,
	speed: 1,
	isFullScreen: false,
	time: {
		duration: 0,
		current: 0,
	},
};

export default fromJS(initialState);
