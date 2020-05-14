import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import FlexContainer from 'shared/styled/FlexContainer';
import Backdrop from 'shared/styled/Backdrop';
import useVideoPlayer from './useVideoPlayer';
import VideoPlayerTextArea from './dependencies/VidePlayerTextAria';
import VideoPlayerButton from './dependencies/VideoPlayerButton';
import { jsx } from "@emotion/core"

/**@jsx jsx */

const VideoPlayer = ({ src, detailVideo }) => {

  const video = useRef(null);
  const { isPlaying, onTogglePlayingVideo } = useVideoPlayer(video);
  const opacityBackdrop = isPlaying ? -1 : 0.6;
  const opacityText = { opacity: isPlaying ? 0 : 1 };

  return (
    <FlexContainer css={{ position: "relative" }}>
      <video src={src} ref={video} width="100%" preload="true" />
      <Backdrop opacity={opacityBackdrop} >
        <FlexContainer flexDir="column" align="center" justify="center" sizeHeight="100%">
          <VideoPlayerButton isPlaying={isPlaying} onClick={onTogglePlayingVideo} />
          <VideoPlayerTextArea animate={opacityText}>{detailVideo}</VideoPlayerTextArea>
        </FlexContainer>
      </Backdrop>
    </FlexContainer>
  )
};

VideoPlayer.defaultProps = {
  src: "",
  detailVideo: ""
}

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  detailVideo: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
};

export default VideoPlayer;
