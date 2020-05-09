import React from 'react';
import "./Home.scss";
import Drawer from 'shared/layouts/Drawer';
import HeaderToolbarMain from 'shared/layouts/HeaderToolbarMain';
import Container from 'shared/styled/Container';
import FlexContainer from 'shared/styled/FlexContainer';

function Home() {
  return (
    <Drawer appbar={<HeaderToolbarMain />}>
      <FlexContainer sizeHeight="100%" justify="space-between">
        <Container variantColor="layout" sizeWidth="350px" flex="none">

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
