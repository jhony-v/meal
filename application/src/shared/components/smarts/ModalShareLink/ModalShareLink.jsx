import React from "react";
import { UIBackdrop } from "shared/styled/UIBackdrop";
import { UIFlexContainer } from "shared/styled/UIFlexContainer";
import { UICard } from "shared/styled/UICard";
import { UIContainer } from "shared/styled/UIContainer";
import ModalShareLinkInputPreview from "./ModalShareLinkInputPreview";
import ModalShareLinkHeader from "./ModalShareLinkHeader";
import { motion } from "framer-motion";
import ModalShareListSocialNetworks from "./ModalShareListSocialNetworks";

const variants = {
	closed: {
		opacity: 0,
		y: 100,
	},
	open: {
		opacity: 1,
		y: 0,
	},
};

const CardShadowAnimated = motion.custom(UICard);

const ModalShareLink = ({ visible, link }) => {
	if (visible)
		return (
			<UIBackdrop light>
				<UIFlexContainer align="center" justify="center" sizeHeight="100%">
						<CardShadowAnimated variants={variants} initial="closed" animate="open" shadow="0 10px 20px rgba(0,0,0,.1)">
							<UIContainer padding="1em 3em" sizeWidth="600px">
								<ModalShareLinkHeader />
								<ModalShareListSocialNetworks linkShare={link} />
								<ModalShareLinkInputPreview linkShare={link} />
							</UIContainer>
						</CardShadowAnimated>
				</UIFlexContainer>
			</UIBackdrop>
		);
	return null;
};

ModalShareLink.defaultProps = {
	visible : false,
	link : "https://www.facebook.com/Callaoweb/videos/581805499130862/?from=bookmark"
}

export default ModalShareLink;
