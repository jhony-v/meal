import React from 'react';
import PropTypes from "prop-types";
import UIAvatar from 'shared/styled/UIAvatar';

function AvatarWallpaper({ image, ...props }) {
  return (
    <UIAvatar {...props}>
      <img src={image} alt="" />
    </UIAvatar>
  )
};

AvatarWallpaper.propTypes = {
  image: PropTypes.string.isRequired
}

AvatarWallpaper.defaultProps = {
  image: ""
}

export default AvatarWallpaper;
