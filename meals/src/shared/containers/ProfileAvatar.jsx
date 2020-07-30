import React from "react";
import AvatarWallpaper from "shared/components/dumbs/AvatarWallpaper";
import { UIAvatarFeaturedPrimary } from "shared/styled/UIAvatar";

const ProfileAvatar = ({ ...props }) => {
  return (
    <AvatarWallpaper
      {...props}
      image="https://cdn.pixabay.com/photo/2015/03/17/14/05/sparkler-677774__340.jpg"
    />
  );
};

export default ProfileAvatar;
