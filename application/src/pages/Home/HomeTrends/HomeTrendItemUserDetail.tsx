import React from "react";
import { UIFlexContainer } from "shared/styled/UIFlexContainer.styled";
import { UIContainer } from "shared/styled/UIContainer.styled";
import { UITextSmooth } from "shared/styled/UIText.styled";
import AvatarWallpaper from "shared/components/dumbs/AvatarWallpaper";

const HomeTrendItemUserDetail = ({ image, text } : any) => {
  return (
    <UIFlexContainer my="5px">
      <AvatarWallpaper
        image="https://cdn.pixabay.com/photo/2015/01/15/16/17/hands-600497__340.jpg"
				size={20}
      />
      <UIContainer ml="5px">
        <UITextSmooth fontSize="small">Change feeling avoid</UITextSmooth>
      </UIContainer>
    </UIFlexContainer>
  );
};

export default HomeTrendItemUserDetail;
