import React, { useContext } from "react";
import { UIInputTextArea } from "shared/styled/UIInput";
import { InputCommentContext } from "./InputCommentProvider";

export default ({ placeholder }) => {
  const { lengthRows , onChange } = useContext(InputCommentContext);
  return (
    <UIInputTextArea
      spellCheck="false"
      padding="10px 0 0 20px"
      rows={lengthRows}
      placeholder={placeholder}
      onChange={onChange}
    ></UIInputTextArea>
  );
};
