import React from 'react';
import PropTypes from "prop-types";
import { UIText } from 'shared/styled/UIText';
import { UIContainer } from 'shared/styled/UIContainer';
import { UIFlexContainer } from 'shared/styled/UIFlexContainer';
import { UIAvatarFeaturedPrimary } from 'shared/styled/UIAvatar';
import AvatarWallpaper from './AvatarWallpaper';

function ThumbnailsChapter({ text, image, sizeImage, isOutstanding }) {
  return (
    <UIFlexContainer flexDir="column" align="center" >
      {isOutstanding ? (
        <UIAvatarFeaturedPrimary>
          <AvatarWallpaper sizeAvatar={sizeImage} image={image} />
        </UIAvatarFeaturedPrimary>
      ) : (
          <AvatarWallpaper sizeAvatar={sizeImage} image={image} />
        )}
      <UIContainer margin="10px 0 0">
        <UIText weight size="small">{text}</UIText>
      </UIContainer>
    </UIFlexContainer>
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
