import React from "react";
import { UIFlexContainer } from "shared/styled/StyledWrappers/UIFlexContainer.styled";
import { UIText } from "shared/styled/StyledLabels/UIText.styled";
import { UIContainer } from "shared/styled/StyledWrappers/UIContainer.styled";
import { UITextSmooth } from "shared/styled/StyledLabels/UIText.styled";

const HomeTrendItem = ({index, title , detail, children } : any) => {
  return (
    <UIFlexContainer py="15px">
      <UIContainer mr="10px">
        <UITextSmooth weight>{index + 1}</UITextSmooth>
      </UIContainer>
      <UIContainer>
        <UIContainer mb="5px">
          <UIText weight fontSize="normal.1" color="primaryDark">{title}</UIText>
        </UIContainer>
        <UITextSmooth fontSize="normal.1">{detail}</UITextSmooth>
        {children}
      </UIContainer>
    </UIFlexContainer>
  );
};

export default HomeTrendItem;
