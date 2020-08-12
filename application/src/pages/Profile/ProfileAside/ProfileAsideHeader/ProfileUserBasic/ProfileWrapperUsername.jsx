import React from "react";
import { UIFlexContainer } from "shared/styled/UIFlexContainer";
import { UIContainer } from "shared/styled/UIContainer";
import { UIAvatarImage } from "shared/styled/UIAvatar";
import { UITextBoldLarge } from "shared/styled/UIText";

export default () => {
	return (
		<UIFlexContainer {...styles.container}>
			<UIContainer mb={10}>
				<UIAvatarImage src={image} size={150} />
			</UIContainer>
			<UITextBoldLarge textAlign="center">
				Jhony Vega Cuya Programmer
			</UITextBoldLarge>
		</UIFlexContainer>
	);
};

const image = "https://cdn.pixabay.com/photo/2020/07/20/06/42/english-bulldog-5422018__340.jpg";
const styles = {
	container: {
		flexDirection: "column",
		alignItems: "center",
	},
};
