import React from "react";
import { IoIosPlayCircle, IoIosPause } from "react-icons/io";
import { useVideoPlayerContext } from "../Providers/VideoPlayerProvider";

export default () => {
	const { playing, onTogglePlaying } = useVideoPlayerContext();
	return <InnerIconPlayingList onClick={onTogglePlaying} icon={playing ? IoIosPause : IoIosPlayCircle} />
};

const InnerIconPlayingList = ({ icon: Icon, ...restProps }) => (
	<Icon {...restProps} {...props} />
);

const props = {
	color: "white",
	size: 50,
	css: {
		position: "absolute",
		left: "50%",
		top: "50%",
		transform: "translate(-50%,-50%)",
	},
};
