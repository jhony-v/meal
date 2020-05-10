import React from 'react';
import scss from "./Home.module.scss";
import Drawer from 'shared/layouts/Drawer';
import HeaderToolbarMain from 'shared/layouts/HeaderToolbarMain';
import FlexContainer from 'shared/styled/FlexContainer';
import ViewCategories from './views/ViewCategories';
import ColumnNavigator from './components/ColumnNavigator';
import Ranking from './views/Ranking';
import NewsPublishedOrdered from './views/NewsPublishedOrdered';
import MyDescription from './views/MyDescription';

function Home() {
  return (
    <Drawer appbar={<HeaderToolbarMain />}>
      <FlexContainer sizeHeight="100%" justify="space-between" className={scss.drawerBody}>

        <ColumnNavigator.Aside >
          <ViewCategories />
        </ColumnNavigator.Aside>

        <ColumnNavigator.CenterViewNews>
          <Ranking />
          <NewsPublishedOrdered />
        </ColumnNavigator.CenterViewNews>

        <ColumnNavigator.Aside>
          <MyDescription />
        </ColumnNavigator.Aside>

      </FlexContainer>
    </Drawer>
  )
}

export default Home;
