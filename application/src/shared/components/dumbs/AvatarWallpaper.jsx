import React from "react";
import PropTypes from "prop-types";
import { UIAvatar, UIAvatarImage } from "shared/styled/UIAvatar";

function AvatarWallpaper({ image, avatarIcon, ...props }) {
  return (
    <UIAvatar {...props}>
      {avatarIcon ? (
        avatarIcon
      ) : (
        <UIAvatarImage src={image} {...props} />
      )}
    </UIAvatar>
  );
}

AvatarWallpaper.propTypes = {
  image: PropTypes.string.isRequired,
  avatarIcon: PropTypes.element,
};

AvatarWallpaper.defaultProps = {
  image: "",
};

export default AvatarWallpaper;
