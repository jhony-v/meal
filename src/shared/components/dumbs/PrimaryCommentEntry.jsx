import React from "react";
import { UIFlexContainer } from "shared/styled/UIFlexContainer";
import { UIInput } from "shared/styled/UIInput";
import { UIContainer } from "shared/styled/UIContainer";
import { UIAvatar } from "shared/styled/UIAvatar";
import { IoIosPaperPlane } from "react-icons/io";


function PrimaryCommentEntry(){
  return (
    <UIFlexContainer>
      <UIInput placeholder="Comentar publicación..." />
      <UIContainer margin="0 0 0 20px">
        <UIAvatar>
          <IoIosPaperPlane />
        </UIAvatar>
      </UIContainer>
    </UIFlexContainer>
  );
};

export default PrimaryCommentEntry;
