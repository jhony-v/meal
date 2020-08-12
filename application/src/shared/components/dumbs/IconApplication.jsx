import React,{ memo } from "react";
import AvatarWallpaper from "./AvatarWallpaper";

function IconApplication() {
  return (
    <AvatarWallpaper size={30} image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRFpif80rWnzxvdTHPtp5mmBWaDVc2Yq_ukhQ&usqp=CAU" />
  );
}

export default memo(IconApplication);
