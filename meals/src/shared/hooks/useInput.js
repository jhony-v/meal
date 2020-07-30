import { useState, useEffect } from "react";

const useInput = (initialValue = "", maxLength = 10000) => {
  const [value, setValue] = useState("");
  const [currentLength, setCurrentLength] = useState(0);

  useEffect(() => {
    setValue(initialValue);
    setCurrentLength(initialValue.length);
  }, []);

  const onChange = (e) => {
    if (e.target.value.length >= maxLength + 1) e.target.value = value;
    setValue(e.target.value);
    setCurrentLength(e.target.value.length);
  };
  const defaultValue = initialValue;

  return {
    value,
    defaultValue,
    currentLength,
    maxLength,
    onChange,
  };
};

export default useInput;
