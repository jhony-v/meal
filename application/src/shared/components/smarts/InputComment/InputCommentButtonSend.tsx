import React from "react";
import { UIButton } from "shared/styled/StyledButtons/UIButton.styled";
import { UITextSmooth } from "shared/styled/StyledLabels/UIText.styled";
import { useInputCommentContext } from "./Providers/InputCommentProvider";
import { ButtonSendFlex } from "./styled";

export default ({onClick}:InputCommentButtonProps) => {
  const { isset, currentLength, maxLength , onSendMessage } = useInputCommentContext();
	const handlerOnClick = () => onClick(onSendMessage());
  return (
		<ButtonSendFlex>
      <UITextSmooth fontSize="normal.1"> {currentLength}/{maxLength} </UITextSmooth>
      {isset && <UIButton variant="primary" onClick={handlerOnClick}>comentar</UIButton>}
		</ButtonSendFlex>
  );
};

type InputCommentButtonProps = {
	onClick : (value : string) => void
}
