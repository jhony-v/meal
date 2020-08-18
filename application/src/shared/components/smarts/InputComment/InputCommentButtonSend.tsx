import React from "react";
import { UIFlexContainer } from "shared/styled/UIFlexContainer.styled";
import { UIButton } from "shared/styled/UIButton.styled";
import { UITextSmooth } from "shared/styled/UIText.styled";
import { useInputCommentContext } from "./Providers/InputCommentProvider";

export default ({onClick}:InputCommentButtonProps) => {
  const { isset, currentLength, maxLength , onSendMessage } = useInputCommentContext();
	const handlerOnClick = () => onClick(onSendMessage());
  return (
    <UIFlexContainer
      p="0 20px 20px"
      justifyContent="space-between"
      alignItems="center"
    >
      <UITextSmooth fontSize="normal.1"> {currentLength}/{maxLength} </UITextSmooth>
      {isset && <UIButton variant="primary" onClick={handlerOnClick}>comentar</UIButton>}
    </UIFlexContainer>
  );
};

type InputCommentButtonProps = {
	onClick : (value : string) => void
}
