import React from "react";
import { UIFlexContainer } from "shared/styled/UIFlexContainer";
import AvatarWallpaper from "./AvatarWallpaper";
import { UIText } from "shared/styled/UIText";
import { UITextSmooth } from "shared/styled/UITextSmooth";
import { jsx } from "@emotion/core";

/**@jsx jsx */

function ThumbnailOfAvatarCompact({ image, title, detail, propsUIAvatar , ...props }) {
  return (
    <UIFlexContainer align="center" {...props}>
      <AvatarWallpaper image={image} css={{ marginRight: 10 }} {...propsUIAvatar} />
      <UIFlexContainer justify="center" flexDir="column">
        <UIText noSelect weight size="small">
          {title}
        </UIText>
        <UITextSmooth size="small2">{detail}</UITextSmooth>
      </UIFlexContainer>
    </UIFlexContainer>
  );
}

export default ThumbnailOfAvatarCompact;
