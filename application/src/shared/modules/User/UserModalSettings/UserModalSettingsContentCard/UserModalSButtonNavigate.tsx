import React from "react";
import { UIFlexContainer } from "shared/styled/UIFlexContainer.styled";
import { UIText } from "shared/styled/UIText.styled";
import { UIContainer } from "shared/styled/UIContainer.styled";
import { UIAvatar } from "shared/styled/UIAvatar.styled";
import { IconType } from "react-icons/lib";
import { UserModalSettingButtonWrapper } from "../styled";

export default function UserModalSButtonNavigate(props : UserModalButtonSettingsProps) {
	return (
		<UserModalSettingButtonWrapper>
			<UIFlexContainer alignItems="center">
				<UIContainer pr={2}>
					<UIAvatar bg="neutralDarker" color="neutral">
							<props.icon size={20} />
					</UIAvatar>
				</UIContainer>
				<UIText weight color="neutral">{props.text}</UIText>
			</UIFlexContainer>
		</UserModalSettingButtonWrapper>
	);
}

type UserModalButtonSettingsProps = {
	text : string;
	icon : IconType;
}