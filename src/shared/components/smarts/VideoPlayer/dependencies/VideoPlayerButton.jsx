import React from "react";
import PropTypes from 'prop-types';
import { IoIosPlayCircle, IoIosPause } from 'react-icons/io';

export default function VideoPlayerButton({ isPlaying, ...props }) {
    return (isPlaying ? (
        <IoIosPause color="white" size={50} {...props} />
    ) : (
            <IoIosPlayCircle color="white" size={50} {...props} />
        ))
}

VideoPlayerButton.defaultProps = {
    isPlaying: false
}

VideoPlayerButton.propTypes = {
    isPlaying: PropTypes.bool.isRequired
}