import React from "react";
import { motion } from "framer-motion";
import AvatarWallpaper from "shared/components/dumbs/AvatarWallpaper";
import { AiFillCaretDown } from "react-icons/ai";

const UserModalSettingsContainer = () => {
	return (
		<motion.div>
			<AvatarWallpaper
				css={{cursor:"pointer"}}
				avatarIcon={<AiFillCaretDown size={20} />}
				bg="rgba(30,130,230,.1)"
				color="primary"
			/>
		</motion.div>
	);
};

export default UserModalSettingsContainer;
