import React from "react";
import { UIContainer } from "shared/styled/StyledWrappers/UIContainer.styled";
import { UIText } from "shared/styled/StyledLabels/UIText.styled";

const ProfileDescriptionDetails = ({ title, children } : any) => {
	return (
		<UIContainer mb={4}>
			<UIContainer mb={3}>
				<UIText weight >{title}</UIText>
			</UIContainer>
			{children}
		</UIContainer>
	);
};

export default ProfileDescriptionDetails;
