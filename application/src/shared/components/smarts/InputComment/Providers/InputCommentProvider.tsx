import React, { useState, useEffect, useContext } from "react";
import useInput from "shared/hooks/useInput";

type InputCommentProviderProps = {
	children: React.ReactNode;
	maxLengthText?: number;
};

type InputCommentContextProps = {
	value?: string;
	maxLength?: number;
	currentLength?: number;
	isset?: boolean;
	lengthRows?: number;
	onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
	onSendMessage?: () => string;
};

const InputCommentContext = React.createContext<InputCommentContextProps>({});
const InputCommentProvider = ({ children, maxLengthText }: InputCommentProviderProps) => {
	const { isset, currentLength, maxLength, onChange, value } = useInput(maxLengthText);
	const [lengthRows, setLengthRows] = useState<number>(1);
	
	const onSendMessage = () : string => value;

	useEffect(() => {
		let currentMatches = value.match(/\n/gm);
		if (currentMatches !== null) {
			setLengthRows(currentMatches.length + 1);
		}
	}, [value]);

	return (
		<InputCommentContext.Provider
			value={{
				value,
				maxLength,
				currentLength,
				isset,
				lengthRows,
				onChange,
				onSendMessage,
			}}
		>
			{children}
		</InputCommentContext.Provider>
	);
};

export default InputCommentProvider;
export const useInputCommentContext = () => useContext(InputCommentContext);
