import React from 'react';
import PropTypes from 'prop-types';
import Card from 'shared/styled/Card';

function CardSimple({ children, ...props }) {
  return (
    <Card {...props} >
      {children}
    </Card>
  );
};

CardSimple.propTypes = {
  child: PropTypes.element
};

export default CardSimple;
