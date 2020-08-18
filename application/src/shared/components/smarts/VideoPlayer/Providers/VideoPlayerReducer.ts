import { TYPES } from "./VideoPlayerActions";
import { Map } from "immutable";
import { VideoPlayerStoreType } from "./VideoPlayerStore";

type ActionPayload<T> = {
	type: TYPES;
	payload?: T;
};
type State = Map<VideoPlayerStoreType, VideoPlayerStoreType>;

export default (state: State, action: ActionPayload<any>) => {
	switch (action.type) {
		case TYPES.TOGGLE_MUTED: return state.updateIn(["muted"], () => action.payload);
		
		case TYPES.TOGGLE_PLAYING: return state.updateIn(["playing"], () => action.payload);
		
		case TYPES.TOGGLE_FULL_SCREEN:	return state.updateIn(["isFullScreen"], (val: any) => !val);
		
		case TYPES.LOADING_VIDEO_START:	return state.updateIn(["loadingVideo"], () => true);
		
		case TYPES.LOADING_VIDEO_COMPLETE:	return state.updateIn(["loadingVideo"], () => false);
		
		case TYPES.SET_SPEED_VIDEO:	return state.updateIn(["speed"], () => action.payload);
		
		case TYPES.SET_PERCENTAGE_BUFFERED:	return state.updateIn(["bufferPercentage"], () => action.payload);
		
		case TYPES.SET_PLAY_VIDEO_UPDATE:
			const { percentage, currentTime } = action.payload;
			return state
						.updateIn(["percentage"], () => percentage)
						.updateIn(["time", "current"], () => currentTime);

		case TYPES.SET_DURATION:	return state.updateIn(["time", "duration"], () => action.payload);
		
		default:
			return state;
	}
};
