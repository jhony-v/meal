import React from "react";
import { UIContainer } from "shared/styled/UIContainer.styled";
import { UIAvatarImage } from "shared/styled/UIAvatar.styled";

export default ({ image } : any) => {
	return (
		<UIContainer mr={10}>
			<UIAvatarImage src={image} size={50} />
		</UIContainer>
	);
};
