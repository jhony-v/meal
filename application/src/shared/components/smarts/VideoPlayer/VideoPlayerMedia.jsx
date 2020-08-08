import { forwardRef } from "react";
import { jsx, css } from "@emotion/core";
import { useVideoPlayerContext } from "./Providers/VideoPlayerProvider";
/** @jsx jsx */

const VideoPlayerMedia = forwardRef(({src}, ref) => {
	const { onToggleFullScreen } = useVideoPlayerContext();
	return (
		<video 
		width="100%" preload="metadata" ref={ref} src={src}
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
