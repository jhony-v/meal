import React from 'react';
import PropTypes from "prop-types";
import Avatar from 'shared/styled/Avatar';

function AvatarWallpaper({ src, ...props }) {
  return (
    <Avatar {...props}>
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
