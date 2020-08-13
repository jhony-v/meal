import React, { forwardRef } from "react";
import { useVideoPlayerContext } from "./Providers/VideoPlayerProvider";
import { UIVideoSimple } from "shared/styled/UIVideo";

const VideoPlayerMedia = forwardRef(({ src, ...props }, ref) => {
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
