import React from 'react'
import CardSimple from 'shared/components/dumbs/CardSimple';
import UIFlexContainer from 'shared/styled/UIFlexContainer';
import SpectrumBadgeScore from './dependencies/SpectrumBadgeScore';
import UIContainer from 'shared/styled/UIContainer';
import UIButton from 'shared/styled/UIButton';
import SpectrumChapterProfile from './dependencies/SpectrumChapterProfile';

const SpectrumTooltip = () => {
  return (
    <UIContainer sizeWidth="250px">

      <CardSimple isTooltip sizeTail={20} shadow="0 10px 20px rgba(0,0,0,.1)">
        <UIFlexContainer flexDir="column">
          <SpectrumChapterProfile image="https://cdn.pixabay.com/photo/2020/01/12/16/57/madrid-4760441__340.jpg" text="Jhony vega" />
          <UIFlexContainer justify="space-between">
            <SpectrumBadgeScore score={232} title="Foods" color="red" />
            <SpectrumBadgeScore score={190} title="Meals" color="blue" />
            <SpectrumBadgeScore score={633} title="Greats" color="yellow" />
          </UIFlexContainer>
          <UIContainer margin="20px 0 10px">
            <UIButton sizeWidth="100%">Ver perfil</UIButton>
          </UIContainer>
        </UIFlexContainer>
      </CardSimple>
    </UIContainer>
  )
}

export default SpectrumTooltip;