import React, { Fragment, ChangeEvent } from "react";
import { IoIosTimer } from "react-icons/io";
import { useVideoPlayerContext } from "../Providers/VideoPlayerProvider";
import useToggle from "shared/hooks/useToggle";
import { AnimatePresence } from "framer-motion";
import { InputRangeSpeed } from "../styled";

export default () => {
	const { onCurrentSpeed } = useVideoPlayerContext();
	const { open, onToggle } = useToggle();
	const onChange = (ev: ChangeEvent<HTMLInputElement>) => onCurrentSpeed(ev.target.value);
	return (
		<Fragment>
			<AnimatePresence>
				{open && <InputRangeSpeed onChange={onChange} />}
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
