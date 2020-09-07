import React from "react";
import { UIContainer } from "shared/styled/UIContainer.styled";
import ProfileUserBasicPreview from "./ProfileAsideUserPreview/ProfileUserBasicPreview";
import ProfileAsideNavigatorContainer from "./ProfileAsideNavigator/ProfileAsideNavigatorContainer";
import ProfileActionConnectSimple from "./ProfileAsideActionsConnect/ProfileActionConnectSimple";
import ProfileUserDescription from "./ProfileDescriptionComplete/ProfileUserDescription";

const ProfileAside = () => {
	return (
		<UIContainer>
			<ProfileUserBasicPreview />
			<ProfileActionConnectSimple />
			<ProfileAsideNavigatorContainer />
			<ProfileUserDescription />
		</UIContainer>
	);
};

export default ProfileAside;
