import React from "react";
import ProfileAvatar from "shared/packages/User/UserDecorators/ProfileAvatar";
import { UIContainer } from "shared/styled/StyledWrappers/UIContainer.styled";
import { UIFlexContainer } from "shared/styled/StyledWrappers/UIFlexContainer.styled";
import { UIText, UITextSmooth } from "shared/styled/StyledLabels/UIText.styled";
import { UIButtonLink } from "shared/styled/StyledButtons/UIButton.styled";

export default function UserModalSPreviewUserInformation() {
	return (
		<UIContainer px={"15px"}>
			<UIFlexContainer alignItems="center">
				<ProfileAvatar size={80} />
				<UIContainer pl={2}>
					<UIText weight>Jhony Vega | Programmer</UIText>
					<UITextSmooth fontSize="normal.0" block>
						username@gmail.com
					</UITextSmooth>
				</UIContainer>
			</UIFlexContainer>
			<UIContainer py={3}>
			<UIButtonLink to="/" block variant="primary">Ver mi perfil</UIButtonLink>
			</UIContainer>
		</UIContainer>
	);
}
