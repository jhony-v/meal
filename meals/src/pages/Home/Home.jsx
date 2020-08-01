import React from 'react';
import scss from "./Home.module.scss";
import HeaderToolbarMain from 'shared/components/layouts/HeaderToolbarMain';
import { UIFlexContainer } from 'shared/styled/UIFlexContainer';
import Drawer from 'shared/components/layouts/Drawer';
import HomeTrendsContainer from './HomeTrends/HomeTrendsContainer';
import HomeWrapperAddPostContainer from './HomeWrapperAddPost/HomeWrapperAddPostContainer';

function Home() {
  return (
    <Drawer appbar={<HeaderToolbarMain />}>
      <UIFlexContainer sizeHeight="100%" justify="space-between" className={scss.drawerBody}>
        <HomeTrendsContainer/>
        <HomeWrapperAddPostContainer/>
        <HomeTrendsContainer/>
      </UIFlexContainer>
    </Drawer>
  )
}

export default Home;
