import React from 'react'
import NewsFeedContainer from 'shared/packages/Publication/NewsFeed/NewsFeedContainer'
import { UIInput } from 'shared/styled/StyledInputs/UIInput.styled'

const ProfileModules = () => {
	return (
		<div>
			<UIInput placeholder="Search meals, discover, learn..." />
			<NewsFeedContainer/>
		</div>
	)
}

export default ProfileModules
