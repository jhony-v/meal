import React from 'react';
import PropTypes from "prop-types";
import Avatar from 'shared/styled/Avatar';

function AvatarWallpaper({ image, ...props }) {
  return (
    <Avatar {...props}>
      <img src={image} alt="" />
    </Avatar>
  )
};

AvatarWallpaper.propTypes = {
  image: PropTypes.string.isRequired
}

AvatarWallpaper.defaultProps = {
  image: ""
}

export default AvatarWallpaper;
