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
