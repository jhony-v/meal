import React from "react";
import { UIFlexContainer } from "shared/styled/StyledWrappers/UIFlexContainer.styled";
import { ContainerBackground } from "./styled";

export default (props: CardBackgroundImageProps) => {
	return (
		<ContainerBackground image={props.image}>
			<UIFlexContainer flexDirection="column">
				{props.children}
			</UIFlexContainer>
		</ContainerBackground>
	);
};

export type CardBackgroundImageProps = {
	image?: string;
	children?: React.ReactNode;
};
