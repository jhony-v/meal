import React, { memo } from 'react'
import { UIFlexContainer } from 'shared/styled/UIFlexContainer'
import { UIAvatarImage } from 'shared/styled/UIAvatar'
import { UIButton } from 'shared/styled/UIButton'
import { UIContainer } from 'shared/styled/UIContainer'
import { UIText } from 'shared/styled/UIText'
import { UITextSmooth } from 'shared/styled/UIText'

function ChipUserFollower(props : ChipUserFollowerProps){
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
	avatar : string;
	username : string;
	description : string;
	onClick : () => void;
	buttonContent : string | React.ReactNode
}

export default memo(ChipUserFollower)
