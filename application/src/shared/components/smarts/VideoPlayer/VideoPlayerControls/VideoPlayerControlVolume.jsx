import React from "react";
import { IoIosVolumeHigh, IoIosVolumeMute } from "react-icons/io";
import { useVideoPlayerContext } from "../Providers/VideoPlayerProvider";

export default () => {
	const { muted , onToggleMuted } = useVideoPlayerContext();
	if (muted) {
		return <IoIosVolumeMute {...props} onClick={onToggleMuted} />;
	}
	return <IoIosVolumeHigh {...props} onClick={onToggleMuted} />;
};

const props = {
	color: "white",
	size: 20,
	css : {
		flex : "none"
	}
};
