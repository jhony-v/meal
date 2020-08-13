import React,{ memo } from "react";
import AvatarWallpaper from "./AvatarWallpaper";

function IconApplication() {
  return (
    <AvatarWallpaper size={40} image="https://cdn2.iconfinder.com/data/icons/minimalism/512/twitter.png" />
  );
}

export default memo(IconApplication);
