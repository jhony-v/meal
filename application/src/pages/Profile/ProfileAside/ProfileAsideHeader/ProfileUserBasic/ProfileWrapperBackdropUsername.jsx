import React from "react";
import { UIContainer } from "shared/styled/UIContainer";
import { UIAvatarImage } from "shared/styled/UIAvatar";

export default ({ image, children }) => {
	return (
		<UIContainer position="relative">
			<UIAvatarImage {...styles.backdrop} src={image} />
			<UIContainer {...styles.wrapperContainer}>{children}</UIContainer>
		</UIContainer>
	);
};

const mb = 120;
const styles = {
	backdrop: {
		borderRadius: 8,
		height: 250,
		width: "100%",
	},
	wrapperContainer: {
		bottom: mb,
		mb: -mb,
		position: "relative",
		width: "100%",
	},
};
