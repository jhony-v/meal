import React, { useContext, useReducer, useEffect } from "react";
import VideoPlayerReducer from "./VideoPlayerReducer";
import VideoPlayerStore from "./VideoPlayerStore";
import { actions } from "./VideoPlayerActions";

type VideoPlayerProviderProps = {
	children : React.ReactNode;
	video : React.RefObject<HTMLVideoElement>
}

const VideoPlayerContext = React.createContext<any>(undefined);
const VideoPlayerProvider = ({ video, children } : VideoPlayerProviderProps) => {
	const [state, dispatch] = useReducer(VideoPlayerReducer, VideoPlayerStore);

	const onTogglePlaying = () => {
		let e = video.current.paused;
		e ? video.current.play() : video.current.pause();
		dispatch(actions.togglePlaying(e));
	};

	const onToggleMuted = () => {
		dispatch(actions.toggleMuted((video.current.muted = !video.current.muted)));
	};

	const onToggleFullScreen = () => {
		if (!state.getIn(["isFullScreen"]))
			(video.current.parentNode as HTMLElement).requestFullscreen();
		else document.exitFullscreen();
		dispatch(actions.toggleFullScreen());
	};

	const onCurrentSpeed = (value : number) => dispatch(actions.setSpeedVideo(value));

	useEffect(() => {
		video.current.playbackRate = state.getIn(["speed"]);
	}, [state, video]);

	useEffect(() => {
		const onTimeUpdate = () => {
			dispatch(
				actions.setPlayVideoUpdate({
					percentage: (video.current.currentTime / video.current.duration) * 100,
					currentTime: video.current.currentTime,
				})
			);
			onUpdateBuffered();
		};

		const onUpdateBuffered = () => {
			dispatch(
				actions.setPercentageBuffered(
					(100 * video.current.buffered.end(video.current.buffered.length - 1)) / video.current.duration
				)
			);
		};

		const onProgress = () => dispatch(actions.setDuration(video.current.duration || 0));
		const onPlaying = () => dispatch(actions.loadingVideoComplete());
		const onWaiting = () => dispatch(actions.loadingVideoStart());

		const onVideoEvents = () => {
			video.current.addEventListener("timeupdate", onTimeUpdate);
			video.current.addEventListener("sekeed", onUpdateBuffered);
			video.current.addEventListener("progress", onProgress);
			video.current.addEventListener("playing", onPlaying);
			video.current.addEventListener("waiting", onWaiting);
		};

		if (video.current.src) {
			onVideoEvents();
		}
	}, [video]);

	return (
		<VideoPlayerContext.Provider
			value={{
				muted: state.getIn(["muted"]),
				playing: state.getIn(["playing"]),
				loadingVideo: state.getIn(["loadingVideo"]),
				isFullscreen: state.getIn(["isFullScreen"]),
				percentage: state.getIn(["percentage"]),
				bufferPercentage: state.getIn(["bufferPercentage"]),
				duration: state.getIn(["time", "duration"]),
				currentTime: state.getIn(["time", "current"]),
				onTogglePlaying,
				onToggleMuted,
				onCurrentSpeed,
				onToggleFullScreen,
			}}
		>
			{children}
		</VideoPlayerContext.Provider>
	);
};

export default VideoPlayerProvider;
export const useVideoPlayerContext = () => useContext(VideoPlayerContext);
