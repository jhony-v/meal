import { useState, useEffect, ChangeEvent } from "react";

type TextFieldElement = HTMLInputElement | HTMLTextAreaElement;

export default (maxLength: number = 400) => {
	const [value, setValue] = useState<string>("");
	const [currentLength, setCurrentLength] = useState<number>(0);
	const [isset, setCheckIsset] = useState<boolean>(false);

	useEffect(() => {
		setCurrentLength(value.length);
		setCheckIsset(currentLength !== 0);
	}, [value, currentLength]);

	const onChange = (e: ChangeEvent<TextFieldElement>): void => {
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
