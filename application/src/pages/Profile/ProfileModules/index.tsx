import React from 'react'
import NewsFeedContainer from 'shared/modules/Publication/NewsFeed/NewsFeedContainer'
import { UIInput } from 'shared/styled/UIInput.styled'

const ProfileModules = () => {
	return (
		<div>
			<UIInput placeholder="Search meals, discover, learn..." />
			<NewsFeedContainer/>
		</div>
	)
}

export default ProfileModules
