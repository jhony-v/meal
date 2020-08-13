import React , { forwardRef } from "react";
import { useVideoPlayerContext } from "./Providers/VideoPlayerProvider";

const VideoPlayerMedia = forwardRef(({src}, ref) => {
	const { onToggleFullScreen } = useVideoPlayerContext();
	return (
		<video 
		width="100%" preload="metadata" ref={ref} src={src}
		onDoubleClick={onToggleFullScreen}		
		css={{
			objectFit:"cover",
			display : "block",
			height:"200px",
			"&:fullscreen" : {
				height : "100%"
			}
		}}
		/>
	);
});
export default VideoPlayerMedia;
