import React from 'react';
import PropTypes from 'prop-types';
import UIContainer from 'shared/styled/UIContainer';
import scss from "./Drawer.module.scss";

function Drawer({ appbar, children }) {
  return (
    <UIContainer className={scss.drawer}>
      {appbar && <UIContainer>{appbar}</UIContainer>}
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
