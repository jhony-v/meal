import React, { ReactNode } from "react";
import { UIContainer } from "shared/styled/UIContainer.styled";
import { UICardFlat } from "shared/styled/UICard.styled";
import { UIFlexContainer } from "shared/styled/UIFlexContainer.styled";
import { UIAvatarImage } from "shared/styled/UIAvatar.styled";
import InputCommentProvider from "./Providers/InputCommentProvider";
import InputCommentTextArea from "./InputCommentTextArea";
import InputCommentButtonSend from "./InputCommentButtonSend";

const InputCommentUser = (props : InputCommentUserProps) => {
	const { children, placeholder, avatar, maxLength, onSendMessage } = props;
  return (
    <UIContainer width="auto">
      <UICardFlat borderRadius="20px">
        <InputCommentProvider maxLengthText={maxLength}>
          <UIFlexContainer p="20px">
            <UIAvatarImage src={avatar} />
            <InputCommentTextArea placeholder={placeholder} />
          </UIFlexContainer>
          <InputCommentButtonSend onClick={onSendMessage} />
        </InputCommentProvider>
        {children && <UIContainer p="20px">{children}</UIContainer>}
      </UICardFlat>
    </UIContainer>
  );
};

type InputCommentUserProps = {
  placeholder?: string;
	avatar ?: string;
	maxLength ?: number;
  onSendMessage: <T>(e : T) => void;
  children ?: ReactNode;
}

InputCommentUser.defaultProps = {
  placeholder: "What's on your mind, Friend ?",
  avatar: "",
  onSendMessage: () : any => null,
  children : null
};

export default InputCommentUser;
