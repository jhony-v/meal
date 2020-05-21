import React from 'react';
import PropTypes from 'prop-types';
import { UICard } from 'shared/styled/UICard';

function CardSimple({ children, ...props }) {
  return (
    <UICard {...props} >
      {children}
    </UICard>
  );
};

CardSimple.propTypes = {
  child: PropTypes.element
}

export default CardSimple;
