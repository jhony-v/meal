import React,{ useRef } from "react";
import { UIContainer } from "shared/styled/UIContainer";
import VideoPlayerFooterControls from "./VideoPlayerFooterControls";
import VideoPlayerControlVolume from "./VideoPlayerControls/VideoPlayerControlVolume";
import VideoPlayerControlSpeed from "./VideoPlayerControls/VideoPlayerControlSpeed";
import VideoPlayerMedia from "./VideoPlayerMedia";
import VideoPlayerControlProgress from "./VideoPlayerControls/VideoPlayerControlProgress";
import VideoPlayerProvider from "./Providers/VideoPlayerProvider";
import VideoPlayerControlButtonPlaying from "./VideoPlayerControls/VideoPlayerControlButtonPlaying";


const VideoPlayer = ({src}) => {
	const video = useRef();

	return (
		<UIContainer css={{overflow:"hidden",borderRadius:"10px"}} position="relative">
			<VideoPlayerProvider video={video}>
				<VideoPlayerMedia ref={video} src={src} />
				<VideoPlayerControlButtonPlaying/>
				<VideoPlayerFooterControls>
								<VideoPlayerControlVolume />
								<VideoPlayerControlProgress  />
								<VideoPlayerControlSpeed/>
				</VideoPlayerFooterControls>
			</VideoPlayerProvider>
		</UIContainer>
	);
};

export default VideoPlayer;
