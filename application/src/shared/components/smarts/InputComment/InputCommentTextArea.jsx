import React from "react";
import { UIInputTextArea } from "shared/styled/UIInput";
import { useInputCommentContext } from "./Providers/InputCommentProvider";

export default ({ placeholder }) => {
  const { lengthRows , onChange } = useInputCommentContext();
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
