import React from 'react';
import scss from "./Home.module.scss";
import { UIFlexContainer } from 'shared/styled/UIFlexContainer';
import Drawer from 'shared/components/layouts/Drawer';
import HomeTrendsContainer from './HomeTrends/HomeTrendsContainer';
import HomeWrapperAddPostContainer from './HomeWrapperAddPost/HomeWrapperAddPostContainer';
import UserFollowersContainer from 'shared/modules/User/UserFollowers/UserFollowersContainer';
import { UIContainer } from 'shared/styled/UIContainer';
import NewsFeedContainer from 'shared/modules/Publication/NewsFeed/NewsFeedContainer';

export default function Home() {
	return (
    <Drawer isMainContainerLayout>
			<UIFlexContainer 
			height="100%" 
			justifyContent="space-between"
			p="2em 1in 0" >
        <HomeTrendsContainer/>
				<UIContainer className={scss.feeds}>
    	    <HomeWrapperAddPostContainer/>
					<NewsFeedContainer/>
				</UIContainer>
				<UserFollowersContainer/>
      </UIFlexContainer>
    </Drawer>
  )
}