import React from 'react';
import CardSimple from './CardSimple';
import { UITextSmooth } from 'shared/styled/UITextSmooth';
import { UIText } from 'shared/styled/UIText';
import { UIContainer } from 'shared/styled/UIContainer';
import PropTypes from "prop-types";

function CardPublishedMain({ detailContext, publishedHeader, publishedFooter, children, ...props }) {
  return (
    <CardSimple {...props}>
      {publishedHeader}
      {children && (
        <UIContainer>{children}</UIContainer>
      )}
      <UIContainer margin="1em 0">
        <UIText><UITextSmooth size="small">{detailContext}</UITextSmooth></UIText>
      </UIContainer>
      {publishedFooter && (
        <UIContainer>{publishedFooter}</UIContainer>
      )}
    </CardSimple>
  )
}

CardPublishedMain.propTypes = {
  detailContext: PropTypes.string,
  publishedFooter: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  publishedHeader: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  children: PropTypes.element
}

export default CardPublishedMain;
