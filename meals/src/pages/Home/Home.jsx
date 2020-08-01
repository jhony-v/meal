import React from 'react';
import scss from "./Home.module.scss";
import HeaderToolbarMain from 'shared/components/layouts/HeaderToolbarMain';
import { UIFlexContainer } from 'shared/styled/UIFlexContainer';
import Drawer from 'shared/components/layouts/Drawer';
import HomeTrendsContainer from './HomeTrends/HomeTrendsContainer';
import InputCommentUser from 'shared/components/smarts/InputComment/InputCommentUser';

function Home() {
  return (
    <Drawer appbar={<HeaderToolbarMain />}>
      <UIFlexContainer sizeHeight="100%" justify="space-between" className={scss.drawerBody}>
        <HomeTrendsContainer/>
        <InputCommentUser 
        avatar="https://cdn.pixabay.com/photo/2020/07/10/15/37/apple-5391076__340.jpg" 
        maxLength={15} 
        onSendMessage={(message) => alert(message)}/>
        <HomeTrendsContainer/>
      </UIFlexContainer>
    </Drawer>
  )
}

export default Home;
