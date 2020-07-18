import React from 'react'
import CardSimple from 'shared/components/dumbs/CardSimple';
import { UIFlexContainer } from 'shared/styled/UIFlexContainer';
import SpectrumBadgeScore from './SpectrumBadgeScore';
import { UIContainer } from 'shared/styled/UIContainer';
import { UIButton } from 'shared/styled/UIButton';
import SpectrumChapterProfile from './SpectrumChapterProfile';

const SpectrumTooltip = ({ image, titleImage, ...props }) => {
  return (
    <UIContainer sizeWidth="250px" {...props}>
      <CardSimple isTooltip sizeTail={20} shadow="0 20px 30px rgba(0,0,0,.1)">
        <UIFlexContainer flexDir="column">
          <SpectrumChapterProfile image={image} text={titleImage} />
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