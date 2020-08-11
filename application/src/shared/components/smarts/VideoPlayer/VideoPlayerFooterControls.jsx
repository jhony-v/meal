import React from "react";
import { UIContainer } from "shared/styled/UIContainer";
import { UIFlexContainer } from "shared/styled/UIFlexContainer";

const VideoPlayerFooterControls = ({children}) => {
	return (
		<UIContainer
			p="1em"
			css={{ background: "rgba(0,0,0,.4)" }}
			position="absolute"
			bottom="0"
			left="0"
			sizeWidth="100%"
			
		>
			<UIContainer p=".5em" css={{background:"rgba(0,0,0,.4)"}} position="absolute" bottom="0" left="0" width="100%">
				<UIFlexContainer align="center" justify="space-between">
					{children}
				</UIFlexContainer>
			</UIContainer>
		</UIContainer>
	);
};

export default VideoPlayerFooterControls;
