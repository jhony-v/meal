import React from 'react';
import FlexContainer from 'shared/styled/FlexContainer';
import AvatarWallpaper from '../AvatarWallpaper';
import Text from 'shared/styled/Text';
import Smooth from 'shared/styled/Smooth';
import { jsx } from "@emotion/core";

/**@jsx jsx */

function ThumbnailOfAvatarCompact({ img, title, detail }) {
  return (
    <FlexContainer align="center">
      <AvatarWallpaper src={img} css={{ marginRight: 10 }} />
      <FlexContainer justify="center" flexDir="column">
        <Text noSelect weight size={0.9}>{title}</Text>
        <Smooth size={.8}>{detail}</Smooth>
      </FlexContainer>
    </FlexContainer>
  )
};

export default ThumbnailOfAvatarCompact;
