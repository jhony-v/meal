import React, { memo } from "react";
import { UIContainer } from "shared/styled/UIContainer";
import { UICardFlat } from "shared/styled/UICard";
import { UIFlexContainer } from "shared/styled/UIFlexContainer";
import { UIAvatarImage } from "shared/styled/UIAvatar";
import { UIInputTextArea } from "shared/styled/UIInput";
import { UIButton } from "shared/styled/UIButton";
import { UITextSmooth } from "shared/styled/UIText";

const InputCommentUser = (props) => {
  const { placeholder, avatar } = props;
  return (
    <UIContainer sizeWidth="600px">
      <UICardFlat radius="20px">
        <UIFlexContainer padding="20px">
          <UIAvatarImage src={avatar} />
          <UIInputTextArea
            placeholder={placeholder} spellCheck="false" padding="10px 0 0 20px" rows="4"
          ></UIInputTextArea>
        </UIFlexContainer>
        <UIFlexContainer padding="0 20px 20px" justify="space-between" align="center">
            <UITextSmooth size="small">10/100</UITextSmooth>
            <UIButton variant="primary">comentar</UIButton>
        </UIFlexContainer>
      </UICardFlat>
    </UIContainer>
  );
};

InputCommentUser.defaultProps = {
    placeholder : "What's on your mind, Jhony?",
    avatar : "https://cdn.pixabay.com/photo/2020/07/10/15/37/apple-5391076__340.jpg"
}

export default memo(InputCommentUser);