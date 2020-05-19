import React from 'react';
import scss from "./HeaderToolbarMain.module.scss";
import Container from 'shared/styled/Container';
import FlexContainer from "shared/styled/FlexContainer";
import Avatar from 'shared/styled/Avatar';
import ChipUsername from 'shared/containers/ChipUsername';
import Input from 'shared/styled/Input';
import HeaderLinksNavigation from './dependencies/HeaderLinksNavigation';

function HeaderToolbarMain() {
  return (
    <Container variantColor="layout" className={scss.header}>
      <FlexContainer align="center" justify="space-between" sizeWidth="100%">
        <Avatar variant="primary" color="white">S</Avatar>
        <Input placeholder="Buscar los alimentos..." sizeWidth="30%" />
        <HeaderLinksNavigation />
        <ChipUsername />
      </FlexContainer>
    </Container>
  )
}

export default HeaderToolbarMain;
