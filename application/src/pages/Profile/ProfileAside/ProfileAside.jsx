import React from "react";
import { UIContainer } from "shared/styled/UIContainer.styled";
import ProfileHeader from "./ProfileAsideHeader/ProfileHeader";
import ProfileAsideNavigatorContainer from "./ProfileAsideNavigator/ProfileAsideNavigatorContainer";
import ProfileActionConnectSimple from "./ProfileAsideActionsConnect/ProfileActionConnectSimple";
import ProfileUserDescription from "./ProfileDescriptionComplete/ProfileUserDescription";

const ProfileAside = () => {
	return (
		<UIContainer>
			<ProfileHeader />
			<ProfileActionConnectSimple />
			<ProfileAsideNavigatorContainer />
			<ProfileUserDescription />
		</UIContainer>
	);
};

export default ProfileAside;
