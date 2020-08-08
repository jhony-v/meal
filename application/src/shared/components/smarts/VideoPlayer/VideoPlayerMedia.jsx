import { forwardRef } from "react";
import { jsx, css } from "@emotion/core";
import { useVideoPlayerContext } from "./Providers/VideoPlayerProvider";
/** @jsx jsx */

const VideoPlayerMedia = forwardRef((_, ref) => {
	const { onToggleFullScreen } = useVideoPlayerContext();
	return (
		<video 
		width="100%" preload="metadata" ref={ref} src={process.env.PUBLIC_URL + "/musk.mp4"}
		onDoubleClick={onToggleFullScreen}		
		css={css`
			object-fit: "cover";
			display: "block";
			height : "300px";
			&:fullscreen {
				height : "100%"
			}
		`}
		/>
	);
});
export default VideoPlayerMedia;
