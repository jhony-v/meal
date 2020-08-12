import React from "react";
import { UIFlexContainer } from "shared/styled/UIFlexContainer";
import { UIInput } from "shared/styled/UIInput";
import { UIContainer } from "shared/styled/UIContainer";
import { UIAvatar } from "shared/styled/UIAvatar";
import { IoIosPaperPlane } from "react-icons/io";
import PropTypes from "prop-types";

function PrimaryCommentEntry({ placeholder, onKeyUp, onClick }) {
  return (
    <UIFlexContainer>
      <UIInput placeholder={placeholder} onKeyUp={onKeyUp} />
      <UIContainer ml="10px">
        <UIAvatar bg="primary" color="white" onClick={onClick}>
          <IoIosPaperPlane />
        </UIAvatar>
      </UIContainer>
    </UIFlexContainer>
  );
}

PrimaryCommentEntry.propTypes = {
  placeholder: PropTypes.string,
};

PrimaryCommentEntry.defaultProps = {
  placeholder: "Comentar...",
};

export default PrimaryCommentEntry;
