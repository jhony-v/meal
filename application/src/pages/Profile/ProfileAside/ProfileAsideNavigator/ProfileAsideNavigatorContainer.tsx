import React from "react";
import { UIFlexContainer } from "shared/styled/UIFlexContainer.styled";
import { useRouteMatch } from "react-router-dom";
import NavigatorLinkTab from "shared/components/dumbs/NavigatorLinkTab";

const ProfileAsideNavigatorContainer = () => {
	const { url } = useRouteMatch();

	return (
		<UIFlexContainer my={4}>
			<NavigatorLinkTab exact to={url} text="Profile" />
			<NavigatorLinkTab  to={`${url}/about`} text="About" />
			<NavigatorLinkTab  to={`${url}/assets`} text="Assets" />
			<NavigatorLinkTab  to={`${url}/settings`} text="Settings" />
		</UIFlexContainer>
	);
};

export default ProfileAsideNavigatorContainer;
