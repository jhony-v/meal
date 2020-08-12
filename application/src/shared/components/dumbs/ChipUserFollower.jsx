import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { UIFlexContainer } from 'shared/styled/UIFlexContainer'
import { UIAvatarImage } from 'shared/styled/UIAvatar'
import { UIButton } from 'shared/styled/UIButton'
import { UIContainer } from 'shared/styled/UIContainer'
import { UIText } from 'shared/styled/UIText'
import { UITextSmooth } from 'shared/styled/UIText'

function ChipUserFollower(props){
	const {avatar,username,description,onClick,buttonContent,...restProps} = props;
	return (
		<UIFlexContainer {...restProps}>
			<UIAvatarImage src={avatar} />
			<UIContainer mx="10px" >
					<UIText weight block color="primaryDark">{username}</UIText>
					<UITextSmooth size="small2" onClick={onClick}>{description}</UITextSmooth>
			</UIContainer>
			<UIButton variant="outline" onClick={onClick}>{buttonContent}</UIButton>
		</UIFlexContainer>
	)
}

ChipUserFollower.propTypes = {
	avatar : PropTypes.string.isRequired,
	username : PropTypes.string.isRequired,
	description : PropTypes.string.isRequired,
	onClick : PropTypes.func,
	buttonContent : PropTypes.oneOfType([PropTypes.string,PropTypes.element])
}

export default memo(ChipUserFollower)
