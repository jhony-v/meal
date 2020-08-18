import React from "react";
import { motion } from "framer-motion";
import { UIAvatarFeaturedOutlined } from "shared/styled/UIAvatar.styled";

const variantsItem = {
	closed: {
		y: 100,
	},
	open: (delay : any) => ({
		y: 0,
		transition: {
			delay: delay,
			type: "spring",
			damping: 8,
		},
	}),
};

const propsOutlined = {
	size: 50,
	as: "a",
	target: "_blank",
	title: "share link",
	css: {
		":hover": {
			transition: ".3s",
			borderColor: "rgb(230,60,90)",
		},
	},
};

// animatable components
const AvatarOutlinedAnimated = motion.custom(UIAvatarFeaturedOutlined);

export default ({ link, transitionDelay, color, icon: IconComponent } : any) => {
	return (
		<AvatarOutlinedAnimated
			{...propsOutlined}
			variants={variantsItem}
			href={link}
			custom={transitionDelay * 0.05}
		>
			<IconComponent size={25} color={color} />
		</AvatarOutlinedAnimated>
	);
};
