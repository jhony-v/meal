import React from "react";
import PropTypes from "prop-types";
import { UIAvatar } from "shared/styled/UIAvatar";
import { Img } from "react-image";

function AvatarWallpaper({ image, ...props }) {
  return (
    <UIAvatar {...props}>
      <Img src={image} />
    </UIAvatar>
  );
}

AvatarWallpaper.propTypes = {
  image: PropTypes.string.isRequired,
};

AvatarWallpaper.defaultProps = {
  image: "",
};

export default AvatarWallpaper;
