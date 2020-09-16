import React, { useRef } from "react";
import VideoPlayerFooterControls from "./VideoPlayerFooterControls";
import VideoPlayerControlVolume from "./VideoPlayerControls/VideoPlayerControlVolume";
import VideoPlayerControlSpeed from "./VideoPlayerControls/VideoPlayerControlSpeed";
import VideoPlayerMedia from "./VideoPlayerMedia";
import VideoPlayerControlProgress from "./VideoPlayerControls/VideoPlayerControlProgress";
import VideoPlayerProvider from "./Providers/VideoPlayerProvider";
import VideoPlayerControlButtonPlaying from "./VideoPlayerControls/VideoPlayerControlButtonPlaying";
import { VideoPlayerWrapper } from "./styled";

const VideoPlayer = ({ src }: any) => {
	const video = useRef();

	return (
		<VideoPlayerWrapper>
			<VideoPlayerProvider video={video}>
				<VideoPlayerMedia ref={video} src={src} />
				<VideoPlayerControlButtonPlaying />
				<VideoPlayerFooterControls>
					<VideoPlayerControlVolume />
					<VideoPlayerControlProgress />
					<VideoPlayerControlSpeed />
				</VideoPlayerFooterControls>
			</VideoPlayerProvider>
		</VideoPlayerWrapper>
	);
};

export default VideoPlayer;
