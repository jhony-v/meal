import React from "react";
import { UIText } from "shared/styled/UIText";
import { UIContainer } from "shared/styled/UIContainer";
import { useRouteMatch, Link } from "react-router-dom";

const ProfileAsideNavigatorLink = ({ to, exact, text }) => {
	const match = useRouteMatch({
		path: to,
		exact,
	});
	const css = match && { borderBottom: "2px solid currentColor" };
	const cssColor = match ? "primary" : "neutral";
	
	return (
		<UIText block weight textAlign="center" color={cssColor}>
			<Link to={to}>
				<UIContainer py={3} css={css}>{text}</UIContainer>
			</Link>
		</UIText>
	);
};

export default ProfileAsideNavigatorLink;
