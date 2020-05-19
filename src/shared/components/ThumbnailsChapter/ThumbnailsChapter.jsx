import React from 'react';
import PropTypes from "prop-types";
import Text from 'shared/styled/Text';
import Container from 'shared/styled/Container';
import FlexContainer from 'shared/styled/FlexContainer';
import AvatarWallpaper from '../AvatarWallpaper';
import { AvatarFeaturedPrimary } from 'shared/styled/Avatar';

function ThumbnailsChapter({ text, image, sizeImage, isOutstanding }) {
  return (
    <FlexContainer flexDir="column" align="center" >
      <AvatarWallpaper sizeAvatar={sizeImage} image={image} />
      <Container margin="10px 0 0">
        <Text weight size="small">{text}</Text>
      </Container>
    </FlexContainer>
  )
};

ThumbnailsChapter.propTypes = {
  text: PropTypes.string,
  image: PropTypes.string,
  sizeImage: PropTypes.number,
  isOutstanding: PropTypes.bool
}

ThumbnailsChapter.defaultProps = {
  text: "",
  image: "",
  sizeImage: 90,
  isOutstanding: false
}

export default ThumbnailsChapter;
