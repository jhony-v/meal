import React from "react";
import { UIFlexContainer } from "shared/styled/UIFlexContainer.styled";
import { UIText } from "shared/styled/UIText.styled";
import AvatarWallpaper from "shared/components/dumbs/AvatarWallpaper";

const ChipUsername = () => {
  return (
    <UIFlexContainer alignItems="center" justifyContent="center">
      <UIText weight color="primaryDark">Jhony vega</UIText>
      <AvatarWallpaper
				image="https://cdn.pixabay.com/photo/2015/03/17/14/05/sparkler-677774__340.jpg"
				ml={10}
      />
    </UIFlexContainer>
  );
};

export default ChipUsername;
