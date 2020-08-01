import React, { useContext } from "react";
import { UIFlexContainer } from "shared/styled/UIFlexContainer";
import { UIButton } from "shared/styled/UIButton";
import { UITextSmooth } from "shared/styled/UIText";
import { InputCommentContext } from "./InputCommentProvider";

export default ({onClick}) => {
  const { isset, currentLength, maxLength , onSendMessage } = useContext(InputCommentContext);
  const handlerOnClick = () => onClick(onSendMessage());
  return (
    <UIFlexContainer
      padding="0 20px 20px"
      justify="space-between"
      align="center"
    >
      <UITextSmooth size="small"> {currentLength}/{maxLength} </UITextSmooth>
      {isset && <UIButton variant="primary" onClick={handlerOnClick}>comentar</UIButton>}
    </UIFlexContainer>
  );
};
