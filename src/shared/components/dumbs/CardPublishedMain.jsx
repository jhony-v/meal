import React from 'react';
import CardSimple from './CardSimple';
import ThumbnailOfAvatarCompact from './ThumbnailOfAvatarCompact';
import UITextSmooth from 'shared/styled/UITextSmooth';
import UIText from 'shared/styled/UIText';
import UIContainer from 'shared/styled/UIContainer';
import PropTypes from "prop-types";

function CardPublishedMain({ image, cardTitle, cardDetailTitle, detailContext, publishedFooter, children, ...props }) {
  return (
    <CardSimple {...props}>
      <ThumbnailOfAvatarCompact
        image={image}
        title={cardTitle}
        detail={cardDetailTitle} />
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
};

CardPublishedMain.propTypes = {
  image: PropTypes.string,
  cardTitle: PropTypes.string,
  cardDetailTitle: PropTypes.string,
  detailContext: PropTypes.string,
  publishedFooter: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  children: PropTypes.element
}

export default CardPublishedMain;
