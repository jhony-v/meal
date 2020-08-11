import React from "react";
import scss from "./HeaderToolbarMain.module.scss";
import { UIFlexContainer } from "shared/styled/UIFlexContainer";
import ChipUsername from "shared/containers/ChipUsername";
import HeaderLinksNavigation from "./dependencies/HeaderLinksNavigation";
import IconApplication from "shared/components/dumbs/IconApplication";
import { UIContainerLayoutFixed } from "shared/styled/UIContainer";

function HeaderToolbarMain() {
  return (
    <UIContainerLayoutFixed variantColor="layout" className={scss.header}>
      <UIFlexContainer alignItems="center" justifyContent="space-between" width="100%">
        <IconApplication />
        <HeaderLinksNavigation />
        <UIFlexContainer flex="none">
          <ChipUsername />
        </UIFlexContainer>
      </UIFlexContainer>
    </UIContainerLayoutFixed>
  );
}

export default HeaderToolbarMain;
