import React from 'react';
import scss from "./HeaderToolbarMain.module.scss";
import { UIContainer } from 'shared/styled/UIContainer';
import { UIFlexContainer } from "shared/styled/UIFlexContainer";
import { UIAvatar } from 'shared/styled/UIAvatar';
import ChipUsername from 'shared/containers/ChipUsername';
import { UIInput } from 'shared/styled/UIInput';
import HeaderLinksNavigation from './dependencies/HeaderLinksNavigation';

function HeaderToolbarMain() {
  return (
    <UIContainer variantColor="layout" className={scss.header}>
      <UIFlexContainer align="center" justify="space-between" sizeWidth="100%">
        <UIAvatar variant="primary" color="white">S</UIAvatar>
        <UIInput placeholder="Buscar los alimentos..." sizeWidth="30%" />
        <HeaderLinksNavigation />
        <ChipUsername />
      </UIFlexContainer>
    </UIContainer>
  )
}

export default HeaderToolbarMain;
