import React from 'react';
import FlexContainer from 'shared/styled/FlexContainer';
import AvatarWallpaper from '../AvatarWallpaper';
import Text from 'shared/styled/Text';
import Smooth from 'shared/styled/Smooth';
import { jsx } from "@emotion/core";

/**@jsx jsx */

function ThumbnailOfAvatarCompact({ image, title, detail }) {
  return (
    <FlexContainer align="center">
      <AvatarWallpaper image={image} css={{ marginRight: 10 }} />
      <FlexContainer justify="center" flexDir="column">
        <Text noSelect weight size="small">{title}</Text>
        <Smooth size="small2" >{detail}</Smooth>
      </FlexContainer>
    </FlexContainer>
  )
};

export default ThumbnailOfAvatarCompact;
