import { IoIosPlayCircle, IoIosPause } from "react-icons/io";
import { useVideoPlayerContext } from "../Providers/VideoPlayerProvider";
import { jsx } from "@emotion/core";
/** @jsx jsx */

export default () => {
	const { playing, onTogglePlaying } = useVideoPlayerContext();
	return (
		<InnerIconPlayingList onClick={onTogglePlaying} icon={playing ? IoIosPause : IoIosPlayCircle} />
	);
};

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

const InnerIconPlayingList = ({ icon: Icon, ...restProps }) => (
	<Icon {...restProps} {...props} />
);