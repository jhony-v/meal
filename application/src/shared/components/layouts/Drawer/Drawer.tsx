import React, { ReactNode } from 'react';
import { UIContainer } from 'shared/styled/UIContainer.styled';
import scss from "./Drawer.module.scss";

function Drawer({ children, isDrawer } : DrawerProps) {
  return (
    <UIContainer className={scss.drawer} isDrawer={isDrawer}>
      {children && <UIContainer>{children}</UIContainer>}
    </UIContainer>
  )
}

type DrawerProps = {
	children : ReactNode;
	isDrawer ?: boolean;
}

export default Drawer;
