import React from 'react';
import "./Home.scss";
import Drawer from 'shared/components/Drawer';
import HeaderToolbarMain from 'shared/layouts/HeaderToolbarMain';

function Home() {
  return (
    <Drawer appbar={<HeaderToolbarMain/>}>
    </Drawer>
    )
}

export default Home;
