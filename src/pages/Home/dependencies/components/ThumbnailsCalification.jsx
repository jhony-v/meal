import React from 'react'
import UIContainer from 'shared/styled/UIContainer';
import ThumbnailOfAvatarCompact from 'shared/components/dumbs/ThumbnailOfAvatarCompact';
import UIFlexContainer from 'shared/styled/UIFlexContainer';
import UIText from 'shared/styled/UIText';
import { jsx } from "@emotion/core";

/**@jsx jsx */

function ThumbnailsCalification({ image, title, points, icon: IconComponent }) {
    return (
        <UIContainer margin="30px 0">
            <UIFlexContainer justify="space-between">
                <ThumbnailOfAvatarCompact
                    image={image}
                    title={title}
                />
                <UIFlexContainer align="center">
                    <UIText weight size={0.9}>{points}</UIText>
                    {<IconComponent color="orange" css={{ marginLeft: 5 }} />}
                </UIFlexContainer>
            </UIFlexContainer>
        </UIContainer>
    )
}

export default ThumbnailsCalification;