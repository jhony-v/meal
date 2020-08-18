import React from "react";
import { UIFlexContainer } from "shared/styled/UIFlexContainer.styled";
import { UIInput } from "shared/styled/UIInput.styled";
import { UIContainer } from "shared/styled/UIContainer.styled";
import { UIAvatar } from "shared/styled/UIAvatar.styled";
import { IoIosPaperPlane } from "react-icons/io";

function PrimaryCommentEntry({ placeholder, onKeyUp, onClick }: PrimaryCommentEntryProps) {
  return (
    <UIFlexContainer>
      <UIInput placeholder={placeholder} onKeyUp={onKeyUp} />
      <UIContainer ml="10px">
        <UIAvatar bg="primary" color="primaryLight" onClick={onClick}>
          <IoIosPaperPlane />
        </UIAvatar>
      </UIContainer>
    </UIFlexContainer>
  );
}

type PrimaryCommentEntryProps = {
	placeholder : string,
	onKeyUp : ( e : React.FormEvent<HTMLInputElement> ) => void,
	onClick : ( e : React.FormEvent<HTMLElement>) => void
};

PrimaryCommentEntry.defaultProps = {
  placeholder: "Comentar...",
};

export default PrimaryCommentEntry;
