import React from "react";
import { UIAvatarImage } from "shared/styled/StyledAvatars/UIAvatar.styled";

const ProfileAvatar = ({ ...props }) => {
  return (
    <UIAvatarImage
      {...props}
      src="https://cdn.pixabay.com/photo/2015/03/17/14/05/sparkler-677774__340.jpg"
    />
  );
};

export default ProfileAvatar;
