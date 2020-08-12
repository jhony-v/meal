import React from "react";
import { UIAvatarImage } from "shared/styled/UIAvatar";
import { UIContainer } from "shared/styled/UIContainer";
import { UIFlexContainer } from "shared/styled/UIFlexContainer";
import { UITextBoldLarge } from "shared/styled/UIText";

const ProfileHeader = () => {
	return (
		<UIContainer position="relative">
			<UIAvatarImage
				{...{ borderRadius: 8, width: "100%", height: 250 }}
				src="https://cdn.pixabay.com/photo/2020/07/19/09/55/man-5419522__340.jpg"
			/>
			<UIFlexContainer
				css={{
					position: "relative",
					bottom: 120,
					justifyContent: "center",
					width: "100%",
				}}
				mb={-120}
			>
				<UIFlexContainer
					css={{
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<UIContainer mb={10}>
						<UIAvatarImage
							src="https://cdn.pixabay.com/photo/2020/06/29/20/45/mother-5354379__340.jpg"
							size={150}
						/>
					</UIContainer>
					<UITextBoldLarge textAlign="center">
						Jhony Vega Cuya Programmer
					</UITextBoldLarge>
				</UIFlexContainer>
			</UIFlexContainer>
		</UIContainer>
	);
};

export default ProfileHeader;
