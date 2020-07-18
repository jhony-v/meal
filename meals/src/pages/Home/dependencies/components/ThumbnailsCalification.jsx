import React from 'react'
import { UIContainer } from 'shared/styled/UIContainer';
import ThumbnailOfAvatarCompact from 'shared/components/dumbs/ThumbnailOfAvatarCompact';
import { UIFlexContainer } from 'shared/styled/UIFlexContainer';
import { UIText } from 'shared/styled/UIText';
import { jsx } from "@emotion/core";

/**@jsx jsx */

function ThumbnailsCalification({ avatarIcon ,bgColorAvatar, title, points, icon }) {
    return (
        <UIContainer margin="30px 0">
            <UIFlexContainer justify="space-between">
                <ThumbnailOfAvatarCompact
                    title={title}
                    propsUIAvatar={{
                        isMaterial : true,
                        personalized : true,
                        avatarIcon : avatarIcon,
                        bgColor : bgColorAvatar,
                        color : "white"
                    }}
                />
                <UIFlexContainer align="center">
                    <UIText weight size={0.9}>{points}</UIText>
                    <UIText css={{color:"orange",marginLeft:5}}>{icon}</UIText>
                </UIFlexContainer>
            </UIFlexContainer>
        </UIContainer>
    )
}

export default ThumbnailsCalification;