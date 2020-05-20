import React from 'react';
import scss from "./Home.module.scss";
import Drawer from 'shared/layouts/Drawer';
import HeaderToolbarMain from 'shared/layouts/HeaderToolbarMain';
import UIFlexContainer from 'shared/styled/UIFlexContainer';
import ColumnNavigator from './dependencies/components/ColumnNavigator';
import Ranking from './dependencies/RankingFeeds';
import ViewCategories from './dependencies/CategoriesEats';
import NewsFeedOrdered from './dependencies/NewsFeedOrdered';
import MyDescription from './dependencies/MyDescription';
import SpectrumTooltip from "shared/components/smarts/SpectrumTooltip";

function Home() {
  return (
    <Drawer appbar={<HeaderToolbarMain />}>
      <UIFlexContainer sizeHeight="100%" justify="space-between" className={scss.drawerBody}>

        <ColumnNavigator.Aside >
          <ViewCategories />
          <SpectrumTooltip/>
        </ColumnNavigator.Aside>

        <ColumnNavigator.CenterViewNews>
          <Ranking />
          <NewsFeedOrdered />
        </ColumnNavigator.CenterViewNews>

        <ColumnNavigator.Aside>
          <MyDescription />
        </ColumnNavigator.Aside>

      </UIFlexContainer>
    </Drawer>
  )
}

export default Home;
