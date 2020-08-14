import { fromJS } from "immutable";

export default fromJS({
	playing: false,
	loadingVideo: false,
	muted: false,
	percentage: 0,
	bufferPercentage: 0,
	time: {
		duration: 0,
		current: 0,
	},
	speed: 1,
	isFullScreen: false,
});

