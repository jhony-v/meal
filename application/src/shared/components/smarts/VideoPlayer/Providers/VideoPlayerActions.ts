export enum TYPES {
	TOGGLE_PLAYING = "TOGGLE_PLAYING",
	LOADING_VIDEO_START = "LOADING_VIDEO_START",
	LOADING_VIDEO_COMPLETE = "LOADING_VIDEO_COMPLETE",
	TOGGLE_MUTED = "SET_MUTED",
	TOGGLE_FULL_SCREEN = "TOGGLE_FULL_SCREEN",
	SET_SPEED_VIDEO = "SET_SPEED_VIDEO",
	SET_PERCENTAGE_VIDEO = "SET_PERCENTAGE_VIDEO",
	SET_PERCENTAGE_BUFFERED = "SET_PERCENTAGE_BUFFERED",
	SET_DURATION = "SET_DURATION",
	SET_PLAY_VIDEO_UPDATE = "SET_PLAY_VIDEO_UPDATE",
}

export const actions = {
	toggleMuted: (payload: any) => ({ type: TYPES.TOGGLE_MUTED, payload }),
	togglePlaying: (payload: any): any => ({
		type: TYPES.TOGGLE_PLAYING,
		payload,
	}),
	toggleFullScreen: () => ({ type: TYPES.TOGGLE_FULL_SCREEN }),
	loadingVideoStart: () => ({ type: TYPES.LOADING_VIDEO_START }),
	loadingVideoComplete: () => ({
		type: TYPES.LOADING_VIDEO_COMPLETE,
	}),
	setSpeedVideo: (payload: any) => ({ type: TYPES.SET_SPEED_VIDEO, payload }),
	setPercentageBuffered: (payload: any) => ({
		type: TYPES.SET_PERCENTAGE_BUFFERED,
		payload,
	}),
	setPlayVideoUpdate: (payload: any) => ({
		type: TYPES.SET_PLAY_VIDEO_UPDATE,
		payload,
	}),
	setDuration: (payload: any) => ({ type: TYPES.SET_DURATION, payload }),
};
