import { UIFlexContainer } from "shared/styled/UIFlexContainer";
import { UIText } from "shared/styled/UIText";
import AvatarWallpaper from "shared/components/dumbs/AvatarWallpaper";
import { jsx } from "@emotion/core";

/**@jsx jsx */

const ChipUsername = () => {
  return (
    <UIFlexContainer align="center" justify="center">
      <UIText weight>Jhony vega</UIText>
      <AvatarWallpaper
        image="https://cdn.pixabay.com/photo/2015/03/17/14/05/sparkler-677774__340.jpg"
        css={{ marginLeft: 10 }}
      />
    </UIFlexContainer>
  );
};

export default ChipUsername;
