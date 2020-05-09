import React from 'react';
import FlexContainer from 'shared/styled/FlexContainer';
import AvatarWallpaper from '../AvatarWallpaper';
import Text from 'shared/styled/Text';
import Smooth from 'shared/styled/Smooth';

const ThumbnailOfAvatarCompact = () => {
  return (
    <FlexContainer align="center">
      <AvatarWallpaper src="https://cdn.pixabay.com/photo/2020/04/20/20/17/lion-5069703__340.jpg" />
      <FlexContainer justify="center" flexDir="column">
        <Text weight>Jhony vega</Text>
        <Smooth>10 de febrero de 2020</Smooth>
      </FlexContainer>
    </FlexContainer>
  )
};

export default ThumbnailOfAvatarCompact;
