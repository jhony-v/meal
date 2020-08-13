import React from "react";
import { UIFlexContainer } from "shared/styled/UIFlexContainer";
import { UIContainer } from "shared/styled/UIContainer";
import { UITextBoldLarge } from "shared/styled/UIText";
import AvatarWallpaper from "shared/components/dumbs/AvatarWallpaper";

export default () => {
	return (
		<UIFlexContainer {...styles.container}>
			<UIContainer mb={10}>
				<AvatarWallpaper image={image} size={150} />
			</UIContainer>
			<UITextBoldLarge textAlign="center">
				Jhony Vega | Programmer
			</UITextBoldLarge>
		</UIFlexContainer>
	);
};

const image = "https://images7.alphacoders.com/393/thumb-1920-393953.jpg";
const styles = {
	container: {
		flexDirection: "column",
		alignItems: "center",
	},
};
