import React from "react";
import { UIFlexContainer } from "shared/styled/StyledWrappers/UIFlexContainer.styled";
import { FooterControls } from "./styled";

const VideoPlayerFooterControls = ({ children }: any) => {
	return (
		<FooterControls>
			<UIFlexContainer alignItems="center" justifyContent="space-between">
				{children}
			</UIFlexContainer>
		</FooterControls>
	);
};

export default VideoPlayerFooterControls;
