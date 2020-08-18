import React, { forwardRef } from "react";
import { useVideoPlayerContext } from "./Providers/VideoPlayerProvider";
import { UIVideoSimple } from "shared/styled/UIVideo.styled";

const VideoPlayerMedia = forwardRef(({ src, ...props } : any, ref) => {
	const { onToggleFullScreen, isFullscreen } = useVideoPlayerContext();
	return (
		<UIVideoSimple
			{...props}
			preload="metadata"
			ref={ref}
			src={src}
			fullScreen={isFullscreen}
			onDoubleClick={onToggleFullScreen}
			onContextMenu={(e) => e.preventDefault()}
		/>
	);
});
export default VideoPlayerMedia;
