import React from "react";
import { UIContainer } from "shared/styled/UIContainer";
import { UIText } from "shared/styled/UIText";

const ProfileDescriptionDetails = ({ title, children }) => {
	return (
		<UIContainer mb={4}>
			<UIContainer mb={3}>
				<UIText weight bold>{title}</UIText>
			</UIContainer>
			{children}
		</UIContainer>
	);
};

export default ProfileDescriptionDetails;
