import React, { memo } from 'react'
import { UIFlexContainer } from 'shared/styled/UIFlexContainer.styled'
import { UIAvatarImage } from 'shared/styled/UIAvatar.styled'
import { UIButton } from 'shared/styled/UIButton.styled'
import { UIContainer } from 'shared/styled/UIContainer.styled'
import { UIText } from 'shared/styled/UIText.styled'
import { UITextSmooth } from 'shared/styled/UIText.styled'

function ChipUserFollower(props : ChipUserFollowerProps & any) {
	const {avatar,username,description,onClick,buttonContent,...restProps} = props;
	return (
		<UIFlexContainer {...restProps}>
			<UIAvatarImage src={avatar} />
			<UIContainer mx="10px" >
					<UIText weight block color="primaryDark">{username}</UIText>
					<UITextSmooth fontSize="small.1" onClick={onClick}>{description}</UITextSmooth>
			</UIContainer>
			<UIButton variant="outline" onClick={onClick}>{buttonContent}</UIButton>
		</UIFlexContainer>
	)
}

type ChipUserFollowerProps = {
	avatar ?: string;
	username ?: string;
	description ?: string;
	onClick ?: () => void;
	buttonContent : string | React.ReactNode
}

export default memo(ChipUserFollower)
