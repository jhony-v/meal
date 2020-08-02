import React, { useState, useEffect } from "react";
import useInput from "shared/hooks/useInput";

export const InputCommentContext = React.createContext();
const InputCommentProvider = ({ children, maxLengthText }) => {
  const {isset, currentLength, maxLength , onChange, value } = useInput(maxLengthText);
  const [ lengthRows , setLengthRows ] = useState(1);

  useEffect(() => {
    let currentMatches = value.match(/\n/gm); 
    if (currentMatches !== null) {
      setLengthRows(currentMatches.length + 1);
    }
  },[value]);

  const onSendMessage = () => value;

  return (
    <InputCommentContext.Provider
      value={{
        value,
        maxLength,
        currentLength,
        isset,
        lengthRows,
        onChange,
        onSendMessage
      }}
    >
      {children}
    </InputCommentContext.Provider>
  );
};

export default InputCommentProvider;
