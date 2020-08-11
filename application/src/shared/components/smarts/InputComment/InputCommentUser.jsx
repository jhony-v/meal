import React from "react";
import { UIContainer } from "shared/styled/UIContainer";
import { UICardFlat } from "shared/styled/UICard";
import { UIFlexContainer } from "shared/styled/UIFlexContainer";
import { UIAvatarImage } from "shared/styled/UIAvatar";
import InputCommentProvider from "./Providers/InputCommentProvider";
import InputCommentTextArea from "./InputCommentTextArea";
import InputCommentButtonSend from "./InputCommentButtonSend";

const InputCommentUser = (props) => {
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

InputCommentUser.defaultProps = {
  placeholder: "What's on your mind, Friend ?",
  avatar: "",
  onSendMessage: () => null,
  children : null
};

export default InputCommentUser;
