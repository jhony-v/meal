import React from 'react';
import "./Home.scss";
import Drawer from 'shared/layouts/Drawer';
import HeaderToolbarMain from 'shared/layouts/HeaderToolbarMain';
import Container from 'shared/styled/Container';
import FlexContainer from 'shared/styled/FlexContainer';
import ViewCategories from './views/ViewCategories';

function Home() {
  return (
    <Drawer appbar={<HeaderToolbarMain />}>
      <FlexContainer sizeHeight="100%" justify="space-between">
        <Container variantColor="layout" sizeWidth="350px" flex="none">
                <ViewCategories/>
        </Container>
        <Container sizeWidth="100%">

        </Container>
        <Container variantColor="layout" sizeWidth="350px" flex="none">

        </Container>
      </FlexContainer>
    </Drawer>
  )
}

export default Home;
