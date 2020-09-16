import React from "react";
import { UIBackdrop } from "shared/styled/UIBackdrop.styled";
import { UIFlexContainer } from "shared/styled/UIFlexContainer.styled";
import { UICard } from "shared/styled/UICard.styled";
import { UIContainer } from "shared/styled/UIContainer.styled";
import ModalShareLinkInputPreview from "./ModalCopyInput/ModalShareLinkInputPreview";
import ModalShareLinkHeader from "./ModalShareLinkHeader";
import { motion } from "framer-motion";
import loadable from "@loadable/component";
import { UILoading } from "shared/styled/UILoading.styled";

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

// async components
const AsyncModalShareListSocialNetworks = loadable(()=>import("./ModalSocialNetworks/ModalShareListSocialNetworks"),{
	fallback : <UILoading/>
});
// animatable components
const CardShadowAnimated = motion.custom(UICard);

const ModalShareLink = ({ visible, link, onClose } : any) => {
	if (visible)
		return (
			<UIBackdrop light>
				<UIFlexContainer alignItems="center" justifyContent="center" height="100%">
						<CardShadowAnimated variants={variants} initial="closed" animate="open" boxShadow="big">
							<UIContainer p="1em 3em" width="600px">
								<ModalShareLinkHeader onClick={onClose} />
								<AsyncModalShareListSocialNetworks linkShare={link} />
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
	link : ""
}

export default ModalShareLink;
