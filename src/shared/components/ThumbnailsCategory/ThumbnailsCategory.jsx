import React from 'react';
import PropTypes from "prop-types";
import Text from 'shared/styled/Text';
import Container from 'shared/styled/Container';
import FlexContainer from 'shared/styled/FlexContainer';
import AvatarWallpaper from '../AvatarWallpaper';

function ThumbnailsCategory({ text, img, sizeImage }) {
  return (
    <FlexContainer flexDir="column" align="center" >
      <AvatarWallpaper
        size={sizeImage}
        src={img} />
      <Container margin="10px 0 0">
        <Text weight size={.8}>{text}</Text>
      </Container>
    </FlexContainer>
  )
};

ThumbnailsCategory.propTypes = {
  text: PropTypes.string,
  img: PropTypes.string,
  sizeImage: PropTypes.number,
}

ThumbnailsCategory.defaultProps = {
  text: "",
  img: "",
  sizeImage: 90
}

export default ThumbnailsCategory;
