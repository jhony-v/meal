import React from "react";
import { UIContainer } from "shared/styled/StyledWrappers/UIContainer.styled";
import { UIAvatarImage } from "shared/styled/StyledAvatars/UIAvatar.styled";

export default ({ image } : any) => {
	return (
		<UIContainer mr={10}>
			<UIAvatarImage src={image} size={50} />
		</UIContainer>
	);
};
