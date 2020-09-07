import React from "react";
import { UIFlexContainer } from "shared/styled/UIFlexContainer.styled";
import { UIText } from "shared/styled/UIText.styled";
import { UIContainerSpan } from "shared/styled/UIContainer.styled";
import UserModalSettings from "shared/packages/User/UserModalSettings/UserModalSettings";
import { UIAvatarImage } from "shared/styled/UIAvatar.styled";

const ChipUsername = () => {
	return (
		<UIFlexContainer alignItems="center" justifyContent="center">
			<UIText weight color="primaryDark">
				Jhony vega
			</UIText>
			<UIContainerSpan ml={10}>
				<UIAvatarImage src="https://cdn.pixabay.com/photo/2015/03/17/14/05/sparkler-677774__340.jpg" />
			</UIContainerSpan>
			<UIContainerSpan ml={10}>
				<UserModalSettings/>
			</UIContainerSpan>
		</UIFlexContainer>
	);
};

export default ChipUsername;
