import React from "react";
import { UIFlexContainer } from "shared/styled/UIFlexContainer";
import { UIInput } from "shared/styled/UIInput";
import { UIContainer } from "shared/styled/UIContainer";
import { UIAvatar } from "shared/styled/UIAvatar";
import { IoIosPaperPlane } from "react-icons/io";
import { useTheme } from "emotion-theming";
import PropTypes from "prop-types";

function PrimaryCommentEntry({ placeholder, onKeyUp, onClick }) {
  const { colors } = useTheme();
  return (
    <UIFlexContainer>
      <UIInput placeholder={placeholder} onKeyUp={onKeyUp} />
      <UIContainer margin="0 0 0 10px">
        <UIAvatar personalized bgColor={colors.primary} color="white" onClick={onClick}>
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
