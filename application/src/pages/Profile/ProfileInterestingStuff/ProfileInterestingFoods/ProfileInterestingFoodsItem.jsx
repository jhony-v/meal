import React from "react";
import { UIContainer } from "shared/styled/UIContainer";
import { UIAvatarImage } from "shared/styled/UIAvatar";

export default ({ image }) => {
	return (
		<UIContainer mr={10}>
			<UIAvatarImage src={image} size={50} />
		</UIContainer>
	);
};
