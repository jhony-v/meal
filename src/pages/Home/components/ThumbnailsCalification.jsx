import React from 'react'
import Container from 'shared/styled/Container';
import ThumbnailOfAvatarCompact from 'shared/components/ThumbnailOfAvatarCompact';
import FlexContainer from 'shared/styled/FlexContainer';
import Text from 'shared/styled/Text';
import { jsx } from "@emotion/core";

/**@jsx jsx */

function ThumbnailsCalification({ img, title, points, icon: IconComponent }) {
    return (
        <Container margin="30px 0">
            <FlexContainer justify="space-between">
                <ThumbnailOfAvatarCompact
                    img={img}
                    title={title}
                />
                <FlexContainer align="center">
                    <Text weight size={0.9}>{points}</Text>
                    {<IconComponent color="orange" css={{ marginLeft: 5 }} />}
                </FlexContainer>
            </FlexContainer>
        </Container>
    )
}

export default ThumbnailsCalification;