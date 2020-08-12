import React from "react";
import ProfileHeader from "./ProfileAsideHeader/ProfileHeader";
import ProfileAsideNavigatorContainer from "./ProfileAsideNavigator/ProfileAsideNavigatorContainer";
import { UIContainer } from "shared/styled/UIContainer";

const ProfileAside = () => {
	return (
		<UIContainer>
			<ProfileHeader />
			<ProfileAsideNavigatorContainer />
		</UIContainer>
	);
};

export default ProfileAside;
