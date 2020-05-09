import React from 'react';
import "./Home.scss";
import Drawer from 'shared/layouts/Drawer';
import HeaderToolbarMain from 'shared/layouts/HeaderToolbarMain';
import Container from 'shared/styled/Container';
import FlexContainer from 'shared/styled/FlexContainer';
import ThumbnailOfAvatarCompact from 'shared/components/ThumbnailOfAvatarCompact/ThumbnailOfAvatarCompact';

function Home() {
  return (
    <Drawer appbar={<HeaderToolbarMain />}>
        <FlexContainer align="stretch">
          <ThumbnailOfAvatarCompact />
        </FlexContainer>
    </Drawer>
  )
}

export default Home;
