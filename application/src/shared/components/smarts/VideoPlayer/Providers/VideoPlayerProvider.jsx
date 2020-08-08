import React, { useContext, useState, useEffect } from "react";

const VideoPlayerContext = React.createContext();
const VideoPlayerProvider = ({ video, children }) => {
	const [playing, setPlaying] = useState(false);
	const [loadingVideo, setLoadingVideo] = useState(false);
	const [muted, setMuted] = useState(false);
	const [percentage, setPercentage] = useState(0);
	const [bufferPercentage, setCurrentBufferPercentage] = useState(0);
	const [duration, setDuration] = useState(0);
	const [currentTime, setCurrenTime] = useState(0);
	const [ currentSpeed , setCurrentSpeed ] = useState(1);
	const [ isFullscreen , setFullScreen ] = useState(false);

	const onTogglePlaying = () => {
		if (video.current.paused) video.current.play();
		else video.current.pause();
		setPlaying(!video.current.paused);
	};
	
	const onToggleMuted = () => {
		setMuted((video.current.muted = !video.current.muted));
	};

	const onToggleFullScreen = () => {
		if(!isFullscreen){
			video.current.parentNode.webkitRequestFullscreen();
		}
		else {
			video.current.parentNode.webkitExitFullscreen();
		}
		setFullScreen(!isFullscreen);
	}
 	
	const onTimeUpdate = () => {
		let currentPercentage = (video.current.currentTime / video.current.duration) * 100;
		setPercentage(currentPercentage);
		setCurrenTime(video.current.currentTime);
		onUpdateBuffered();
	};
	
	const onUpdateBuffered = () => {
		let currentBuffer = (100 * video.current.buffered.end(video.current.buffered.length - 1)) / video.current.duration;
		setCurrentBufferPercentage(currentBuffer);
	};

	const onProgress = () => setDuration(video.current.duration || 0);
	const onPlaying = () => setLoadingVideo(false);
	const onWaiting = () => setLoadingVideo(true);
	const onCurrentSpeed = (value) => setCurrentSpeed(value);

	useEffect(() => {
		video.current.playbackRate = currentSpeed;
	},[currentSpeed,video]);

	useEffect(() => {
		if (video.current.src) {
			video.current.addEventListener("timeupdate", onTimeUpdate);
			video.current.addEventListener("sekeed", onUpdateBuffered);
			video.current.addEventListener("progress", onProgress);
			video.current.addEventListener("playing", onPlaying);
			video.current.addEventListener("waiting", onWaiting);
		}
	}, []);

	return (
		<VideoPlayerContext.Provider
			value={{
				muted,
				playing,
				percentage,
				bufferPercentage,
				duration,
				currentTime,
				isFullscreen,
				loadingVideo,
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

export const useVideoPlayerContext = () => useContext(VideoPlayerContext);
export default VideoPlayerProvider;
