import React from "react";
import { UIFlexContainer } from "shared/styled/UIFlexContainer";
import { UIText } from "shared/styled/UIText";
import { UIContainer } from "shared/styled/UIContainer";
import { UITextSmooth } from "shared/styled/UIText";

const HomeTrendItem = ({index, title , detail, children }) => {
  return (
    <UIFlexContainer py="15px">
      <UIContainer mr="10px">
        <UITextSmooth weight>{index + 1}</UITextSmooth>
      </UIContainer>
      <UIContainer>
        <UIContainer mb="5px">
          <UIText weight size="small" color="primaryDark">{title}</UIText>
        </UIContainer>
        <UITextSmooth size="small">{detail}</UITextSmooth>
        {children}
      </UIContainer>
    </UIFlexContainer>
  );
};

export default HomeTrendItem;
