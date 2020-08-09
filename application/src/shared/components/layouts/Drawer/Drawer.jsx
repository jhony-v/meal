import React from 'react';
import PropTypes from 'prop-types';
import { UIContainer } from 'shared/styled/UIContainer';
import scss from "./Drawer.module.scss";

function Drawer({ children, ...props }) {
  return (
    <UIContainer className={scss.drawer} {...props}>
      {children && <UIContainer>{children}</UIContainer>}
    </UIContainer>
  )
}

Drawer.propTypes = {
  children: PropTypes.element,
  appbar: PropTypes.element,
  spaceFromTop: PropTypes.string
}

export default Drawer;
