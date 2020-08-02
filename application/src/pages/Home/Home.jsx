import React from 'react';
import scss from "./Home.module.scss";
import HeaderToolbarMain from 'shared/components/layouts/HeaderToolbarMain';
import { UIFlexContainer } from 'shared/styled/UIFlexContainer';
import Drawer from 'shared/components/layouts/Drawer';
import HomeTrendsContainer from './HomeTrends/HomeTrendsContainer';
import HomeWrapperAddPostContainer from './HomeWrapperAddPost/HomeWrapperAddPostContainer';
import ChipUserFollower from 'shared/components/dumbs/ChipUserFollower';
import { UIContainer } from 'shared/styled/UIContainer';

function Home() {
  return (
    <Drawer appbar={<HeaderToolbarMain />}>
      <UIFlexContainer sizeHeight="100%" justify="space-between" className={scss.drawerBody}>
        <HomeTrendsContainer/>
        <HomeWrapperAddPostContainer/>
				<UIContainer>
					<ChipUserFollower 
					avatar="https://cdn.pixabay.com/photo/2017/03/17/04/07/beautiful-2150881__340.jpg"
					username="Mark zuckerberg"
					description="@CEO in facebook"
					buttonContent="Follow" />
				</UIContainer>
      </UIFlexContainer>
    </Drawer>
  )
}

export default Home;
