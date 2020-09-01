import React, { useState, createContext, useContext } from "react";

const DropDownListContext = createContext<DropdownListContextProps | undefined>(undefined);
const DropDownListProvider = ({ children, initial }: DropdownListProps) => {
	const [dropdownIndex, setActiveDropdownIndex] = useState<number>(initial);
	return (
		<DropDownListContext.Provider value={{ dropdownIndex, setActiveDropdownIndex }} >
			{children}
		</DropDownListContext.Provider>
	);
};

type DropdownListContextProps = {
	dropdownIndex: number;
	setActiveDropdownIndex: (value: number) => void;
};

type DropdownListProps = {
	children: React.ReactNode;
	initial?: number;
};

export const DropdownListConsumer = DropDownListContext.Consumer;
export const useDropdowntListContext = () => useContext(DropDownListContext);
export default DropDownListProvider;
