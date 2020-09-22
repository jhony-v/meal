import React from "react";
import ProfileDescriptionDetails from "../ProfileAsideComponents/ProfileDescriptionDetails";
import { UIFlexContainer } from "shared/styled/StyledWrappers/UIFlexContainer.styled";
import ChipSimple from "shared/components/dumbs/ChipSimple";

const ProfileDetailsTypeLikes = () => {
	return (
		<ProfileDescriptionDetails title="Likes">
			<UIFlexContainer flexWrap="wrap">
				{Array(4)
					.fill(0)
					.map((e, i) => {
						return <ChipSimple m={1} key={i}>Drinks fullsnap...</ChipSimple>;
					})}
			</UIFlexContainer>
		</ProfileDescriptionDetails>
	);
};

export default ProfileDetailsTypeLikes;
