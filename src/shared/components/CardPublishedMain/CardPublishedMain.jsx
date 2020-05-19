import React from 'react';
import CardSimple from 'shared/components/CardSimple';
import ThumbnailOfAvatarCompact from 'shared/components/ThumbnailOfAvatarCompact';
import Smooth from 'shared/styled/Smooth';
import Text from 'shared/styled/Text';
import Container from 'shared/styled/Container';
import PropTypes from "prop-types";

function CardPublishedMain({ image, cardTitle, cardDetailTitle, detailContext, publishedFooter, children, ...props }) {
  return (
    <CardSimple {...props}>
      <ThumbnailOfAvatarCompact
        image={image}
        title={cardTitle}
        detail={cardDetailTitle} />
      {children && (
        <Container>{children}</Container>
      )}
      <Container margin="1em 0">
        <Text><Smooth size="small">{detailContext}</Smooth></Text>
      </Container>
      {publishedFooter && (
        <Container>{publishedFooter}</Container>
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
