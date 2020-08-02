import React from 'react';
import scss from "./Home.module.scss";
import HeaderToolbarMain from 'shared/components/layouts/HeaderToolbarMain';
import { UIFlexContainer } from 'shared/styled/UIFlexContainer';
import Drawer from 'shared/components/layouts/Drawer';
import HomeTrendsContainer from './HomeTrends/HomeTrendsContainer';
import HomeWrapperAddPostContainer from './HomeWrapperAddPost/HomeWrapperAddPostContainer';
import UserFollowersContainer from 'shared/modules/User/UserFollowers/UserFollowersContainer';

function Home() {
  return (
    <Drawer appbar={<HeaderToolbarMain />}>
      <UIFlexContainer sizeHeight="100%" justify="space-between" className={scss.drawerBody}>
        <HomeTrendsContainer/>
        <HomeWrapperAddPostContainer/>
				<UserFollowersContainer/>
      </UIFlexContainer>
    </Drawer>
  )
}

export default Home;
