import React, { useState } from 'react'
import FullScreen from 'react-full-screen';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const VideoPlayerFullScreen = ({ children }) => {
    const [isFull, setFullScreen] = useState(false);
    return (
        <FullScreen enabled={isFull}>
            <motion.div onDoubleClick={() => setFullScreen(!isFull)} >
                {children}
            </motion.div>
        </FullScreen>
    )
}

VideoPlayerFullScreen.propTypes = {
    childre: PropTypes.element
}

export default VideoPlayerFullScreen;