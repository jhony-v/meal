import { useState, useEffect } from "react";

const useInput = ( maxLength = 400) => {
  const [value, setValue] = useState("");
  const [currentLength, setCurrentLength] = useState(0);
  const [isset, setCheckIsset] = useState(false);

  useEffect(() => {
		setCurrentLength(value.length);
    setCheckIsset(currentLength !== 0);
  }, [value,currentLength]);


  const onChange = (e) => {
    if (e.target.value.length >= maxLength + 1) e.target.value = value;
    setValue(e.target.value);
    setCurrentLength(e.target.value.length);
  };

  return {
    value,
    currentLength,
    maxLength,
    onChange,
    isset,
  };
};

export default useInput;
