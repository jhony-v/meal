import React from 'react'
import ThumbnailsChapter from 'shared/components/dumbs/ThumbnailsChapter';
import UIContainer from 'shared/styled/UIContainer';

export default function SpectrumChapterProfile({image,text}) {
    return (
        <UIContainer margin="0 0 10px">
            <ThumbnailsChapter
                sizeImage={40}
                image={image}
                text={text} />
        </UIContainer>
    )
}
