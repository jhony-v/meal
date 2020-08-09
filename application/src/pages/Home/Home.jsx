import React from 'react';
import scss from "./Home.module.scss";
import { UIFlexContainer } from 'shared/styled/UIFlexContainer';
import Drawer from 'shared/components/layouts/Drawer';
import HomeTrendsContainer from './HomeTrends/HomeTrendsContainer';
import HomeWrapperAddPostContainer from './HomeWrapperAddPost/HomeWrapperAddPostContainer';
import UserFollowersContainer from 'shared/modules/User/UserFollowers/UserFollowersContainer';
import { UIContainer } from 'shared/styled/UIContainer';
import NewsFeedContainer from 'shared/modules/Publication/NewsFeed/NewsFeedContainer';

function Home() {
	return (
    <Drawer isMainContainerLayout>
			<UIFlexContainer 
			sizeHeight="100%" 
			justify="space-between"
			padding="2em 1in 0" >
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

export default Home;
