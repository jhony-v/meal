import React from "react";
import ProfileAvatar from "shared/containers/ProfileAvatar";
import { UIContainer } from "shared/styled/UIContainer.styled";
import { UIFlexContainer } from "shared/styled/UIFlexContainer.styled";
import { UIText, UITextSmooth } from "shared/styled/UIText.styled";
import { UIButtonLink } from "shared/styled/UIButton.styled";

export default function UserModalSPreviewUserInformation() {
	return (
		<UIContainer px={"15px"}>
			<UIFlexContainer alignItems="center">
				<ProfileAvatar size={80} />
				<UIContainer pl={2}>
					<UIText weight>Jhony Vega | Programmer</UIText>
					<UITextSmooth fontSize="normal.0">
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
