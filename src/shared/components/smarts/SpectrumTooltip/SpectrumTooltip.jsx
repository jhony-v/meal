import React from 'react'
import CardSimple from 'shared/components/dumbs/CardSimple';
import ThumbnailsChapter from 'shared/components/dumbs/ThumbnailsChapter';
import UIFlexContainer from 'shared/styled/UIFlexContainer';
import SpectrumBadgeScore from './dependencies/SpectrumBadgeScore';
import UIContainer from 'shared/styled/UIContainer';

const EspectrumTooltip = () => {
  return (
    <CardSimple>
      <UIFlexContainer flexDir="column">
        <UIContainer margin="0 0 10px">
          <ThumbnailsChapter
            sizeImage={40}
            image="https://cdn.pixabay.com/photo/2020/01/12/16/57/madrid-4760441__340.jpg"
            text="Jhony Vega" />
        </UIContainer>
        <UIFlexContainer justify="space-between">
          <SpectrumBadgeScore score={232} title="Foods" color="red" />
          <SpectrumBadgeScore score={190} title="Meals" color="blue" />
          <SpectrumBadgeScore score={633} title="Greats" color="yellow" />
        </UIFlexContainer>
        <UIFlexContainer justify="space-between">
        </UIFlexContainer>
      </UIFlexContainer>
    </CardSimple>
  )
}

export default EspectrumTooltip;