import React from "react";
import { UIFlexContainer } from "shared/styled/UIFlexContainer";
import { UIButton } from "shared/styled/UIButton";
import { UITextSmooth } from "shared/styled/UIText";
import { useInputCommentContext } from "./Providers/InputCommentProvider";

export default ({onClick}) => {
  const { isset, currentLength, maxLength , onSendMessage } = useInputCommentContext();
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
