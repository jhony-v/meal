import React from 'react';
import FlexContainer from 'shared/styled/FlexContainer';
import Text from 'shared/styled/Text';
import AvatarWallpaper from 'shared/components/AvatarWallpaper';
import { jsx } from "@emotion/core";

/**@jsx jsx */

const ChipUsername = () => {
  return (
    <FlexContainer align="center" justify="center">
      <Text weight>Jhony vega</Text>
      <AvatarWallpaper image="https://cdn.pixabay.com/photo/2015/03/17/14/05/sparkler-677774__340.jpg" css={{marginLeft:10}} />
    </FlexContainer>
  )
};

export default ChipUsername;
