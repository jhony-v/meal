import React, { ReactNode } from 'react';
import { UIContainer, UIContainerLayoutDrawer } from 'shared/styled/UIContainer.styled';
import scss from "./Drawer.module.scss";

function Drawer({ children, isDrawer } : DrawerProps) {
  return (
    <UIContainerLayoutDrawer className={scss.drawer} isDrawer={isDrawer}>
      {children && <UIContainer>{children}</UIContainer>}
    </UIContainerLayoutDrawer>
  )
}

type DrawerProps = {
	children : ReactNode;
	isDrawer ?: boolean;
}

export default Drawer;
