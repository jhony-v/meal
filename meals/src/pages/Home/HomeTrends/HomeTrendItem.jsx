import React from "react";
import { UIFlexContainer } from "shared/styled/UIFlexContainer";
import { UIText } from "shared/styled/UIText";
import { UIContainer } from "shared/styled/UIContainer";
import { UITextSmooth } from "shared/styled/UIText";

const HomeTrendItem = ({index, title , detail, children }) => {
  return (
    <UIFlexContainer padding="10px 0">
      <UIContainer marginRight="10px">
        <UITextSmooth weight>{index + 1}</UITextSmooth>
      </UIContainer>
      <UIContainer>
        <UIContainer marginBottom="5px">
          <UIText weight size="small">{title}</UIText>
        </UIContainer>
        <UITextSmooth size="small">{detail}</UITextSmooth>
        {children}
      </UIContainer>
    </UIFlexContainer>
  );
};

export default HomeTrendItem;
