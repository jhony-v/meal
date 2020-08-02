import React,{ memo } from "react";
import AvatarWallpaper from "./AvatarWallpaper";

function IconApplication() {
  return (
    <AvatarWallpaper sizeAvatar={30} image="https://www.creativefreedom.co.uk/wp-content/uploads/2017/06/Twitter-featured.png" />
  );
}

export default memo(IconApplication);
