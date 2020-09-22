import React, { memo } from 'react'
import { UIFlexContainer } from 'shared/styled/StyledWrappers/UIFlexContainer.styled'
import { UIAvatarImage } from 'shared/styled/StyledAvatars/UIAvatar.styled'
import { UIButton } from 'shared/styled/StyledButtons/UIButton.styled'
import { UIContainer } from 'shared/styled/StyledWrappers/UIContainer.styled'
import { UIText } from 'shared/styled/StyledLabels/UIText.styled'
import { UITextSmooth } from 'shared/styled/StyledLabels/UIText.styled'

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

ChipUserFollower.defaultProps = {
	buttonContent : "seguir"
}

export default memo(ChipUserFollower)
