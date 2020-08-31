import React from "react";
import scss from "./HeaderToolbarMain.module.scss";
import { UIFlexContainer } from "shared/styled/UIFlexContainer.styled";
import ChipUsername from "shared/containers/ChipUsername";
import HeaderLinksNavigation from "./dependencies/HeaderLinksNavigation";
import IconApplication from "shared/containers/IconApplication";
import { UIContainerLayoutFixed } from "shared/styled/UIContainer.styled";

function HeaderToolbarMain() {
  return (
    <UIContainerLayoutFixed variantColor="light" className={scss.header}>
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
