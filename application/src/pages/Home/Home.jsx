import React from 'react';
import scss from "./Home.module.scss";
import HeaderToolbarMain from 'shared/components/layouts/HeaderToolbarMain';
import { UIFlexContainer } from 'shared/styled/UIFlexContainer';
import Drawer from 'shared/components/layouts/Drawer';
import HomeTrendsContainer from './HomeTrends/HomeTrendsContainer';
import HomeWrapperAddPostContainer from './HomeWrapperAddPost/HomeWrapperAddPostContainer';
import UserFollowersContainer from 'shared/modules/User/UserFollowers/UserFollowersContainer';
import { UIContainer } from 'shared/styled/UIContainer';
import NewsFeedContainer from 'shared/modules/Publication/NewsFeed/NewsFeedContainer';
import ModalShareLink from 'shared/components/smarts/ModalShareLink/ModalShareLink';
import useToggle from 'shared/hooks/useToggle';

function Home() {
	const { open , onToggle } = useToggle();
	return (
    <Drawer appbar={<HeaderToolbarMain />}>
			<UIFlexContainer 
			className={scss.drawerBody} 
			sizeHeight="100%" 
			justify="space-between"
			padding="2em 1in 0" >
			<ModalShareLink visible={open} onClose={onToggle} link="https://www.youtube.com/watch?v=KtrNBI8JG3A" />
        <HomeTrendsContainer/>
				<UIContainer className={scss.feeds}>
			<button onClick={onToggle}>ckecheabke</button>
    	    <HomeWrapperAddPostContainer/>
					<NewsFeedContainer/>
				</UIContainer>
				<UserFollowersContainer/>
      </UIFlexContainer>
    </Drawer>
  )
}

export default Home;
