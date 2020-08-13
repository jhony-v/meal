import React from 'react'
import NewsFeedContainer from 'shared/modules/Publication/NewsFeed/NewsFeedContainer'
import { UIInput } from 'shared/styled/UIInput'

const ProfilePreviewModules = () => {
	return (
		<div>
			<UIInput placeholder="Search meals, discover, learn..." />
			<NewsFeedContainer/>
		</div>
	)
}

export default ProfilePreviewModules
