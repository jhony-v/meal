import React from "react";
import { UIContainer } from "shared/styled/UIContainer";
import ProfileHeader from "./ProfileAsideHeader/ProfileHeader";
import ProfileAsideNavigatorContainer from "./ProfileAsideNavigator/ProfileAsideNavigatorContainer";
import ProfileActionConnectSimple from "./ProfileAsideActionsConnect/ProfileActionConnectSimple";

const ProfileAside = () => {
	return (
		<UIContainer>
			<ProfileHeader />
			<ProfileActionConnectSimple/>
			<ProfileAsideNavigatorContainer />
		</UIContainer>
	);
};

export default ProfileAside;
