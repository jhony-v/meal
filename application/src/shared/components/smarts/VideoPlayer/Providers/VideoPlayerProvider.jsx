import React from "react";

export const VideoPlayerContext = React.createContext();
const VideoPlayerProvider = ({ children }) => {
	return (
		<VideoPlayerContext.Provider value={{}}>
			{children}
		</VideoPlayerContext.Provider>
	);
};

export default VideoPlayerProvider;
