import React, { Fragment } from "react";
import { IoIosTimer } from "react-icons/io";
import { useVideoPlayerContext } from "../Providers/VideoPlayerProvider";
import useToggle from "shared/hooks/useToggle";
import { AnimatePresence } from "framer-motion";
import ProgressSpeedStyled from "../VideoPlayerStyled/ProgressSpeedStyled";

export default () => {
	const { onCurrentSpeed } = useVideoPlayerContext();
	const { open, onToggle } = useToggle();
	const onChange = (ev) => onCurrentSpeed(ev.target.value);
	return (
		<Fragment>
			<AnimatePresence>
				{open && <ProgressSpeedStyled.InputRange onChange={onChange} />}
			</AnimatePresence>
			<IoIosTimer
				color="white"
				size={20}
				onClick={onToggle}
				css={{ flex: "none" }}
			/>
		</Fragment>
	);
};
