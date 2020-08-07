import React from "react";
import { UIAvatarFeaturedOutlined } from "shared/styled/UIAvatar";
import { motion } from "framer-motion";
import LinksShare from "./LinksShare";
import { UIFlexContainer } from "shared/styled/UIFlexContainer";

const variantsItem = {
	closed: {
		y: 100,
	},
	open: (delay) => ({
		y: 0,
		transition: {
			delay: delay,
			type: "spring",
			damping: 8,
		},
	}),
};

const AvatarOutlinedAnimated = motion.custom(UIAvatarFeaturedOutlined);

const ModalShareListSocialNetworks = ({ linkShare }) => {
	return (
		<UIFlexContainer align="center" justify="space-between" marginVertical="2em" >
			{LinksShare.map((e, i) => (
				<AvatarOutlinedAnimated
					key={i} 
					variants={variantsItem} custom={i * 0.05} sizeAvatar={50} colorAvatar={e.color} 
					as="a" 
					target="_blank"
					href={e.link + linkShare}
				>
					<e.icon size={25} />
				</AvatarOutlinedAnimated>
			))}
		</UIFlexContainer>
	);
};

export default ModalShareListSocialNetworks;
