import React from "react";
import scss from "./HeaderToolbarMain.module.scss";
import { UIContainer } from "shared/styled/UIContainer";
import { UIFlexContainer } from "shared/styled/UIFlexContainer";
import ChipUsername from "shared/containers/ChipUsername";
import HeaderLinksNavigation from "./dependencies/HeaderLinksNavigation";
import IconApplication from "shared/components/dumbs/IconApplication";

function HeaderToolbarMain() {
  return (
    <UIContainer variantColor="layout" className={scss.header}>
      <UIFlexContainer align="center" justify="space-between" sizeWidth="100%">
        <IconApplication />
        <HeaderLinksNavigation />
        <UIFlexContainer flex="none">
          <ChipUsername />
        </UIFlexContainer>
      </UIFlexContainer>
    </UIContainer>
  );
}

export default HeaderToolbarMain;
