import React from 'react'
import Text from 'shared/styled/Text';
import Container from 'shared/styled/Container';
import FlexContainer from 'shared/styled/FlexContainer';
import AvatarWallpaper from 'shared/components/AvatarWallpaper/AvatarWallpaper';

function ThumbnailsInRanking({ text, img }) {
    return (
        <FlexContainer flexDir="column" align="center" >
            <AvatarWallpaper
                size={90}
                src={img} />
            <Container margin="10px 0 0">
                <Text weight size={.8}>{text}</Text>
            </Container>
        </FlexContainer>
    )
}

export default ThumbnailsInRanking;
