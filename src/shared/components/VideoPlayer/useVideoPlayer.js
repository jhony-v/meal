import { useState } from "react";

const useVideoPlayer = (video) => {
    const [isPlaying, setPlayVideo] = useState(false);

    const videoPlayer = {
        onPlay() {
            video.current.play();
        },
        onPause() {
            video.current.pause();
        },
        onStop() {
            video.current.pause();
            video.current.currentTime = 0;
        },
        onTogglePlayingVideo() {
            if (video.current.paused) {
                videoPlayer.onPlay();
                setPlayVideo(true);
            }
            else {
                videoPlayer.onPause();
                setPlayVideo(false);
            }
        }
    };

    return {
        isPlaying,
        ...videoPlayer
    }
}

export default useVideoPlayer;