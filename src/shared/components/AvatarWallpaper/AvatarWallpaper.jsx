import React from 'react';
import PropTypes from "prop-types";
import Avatar from 'shared/styled/Avatar';

function AvatarWallpaper({ src }) {
  return (
    <Avatar>
      <img src={src} alt="" />
    </Avatar>
  )
};

AvatarWallpaper.propTypes = {
  src: PropTypes.string.isRequired
}

AvatarWallpaper.defaultProps = {
  src: ""
}

export default AvatarWallpaper;
