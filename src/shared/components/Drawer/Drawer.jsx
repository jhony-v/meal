import React from 'react';
import PropTypes from 'prop-types';
import Container from 'shared/styled/Container';
import scss from "./Drawer.module.scss";

function Drawer({ appbar, children }) {
  return (
    <Container className={scss.drawer}>
      {appbar && (
        <Container>{appbar}</Container>
      )}
      {children && (
        <Container>{children}</Container>
      )}
    </Container>
  );
}

Drawer.propTypes = {
  children: PropTypes.element,
  appbar: PropTypes.element,
  spaceFromTop: PropTypes.string
}

Drawer.defaultProps = {
  spaceFromTop: "100px",
}

export default Drawer;
