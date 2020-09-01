import React from "react";
import { DropdownListItemHeaderWrapper } from "../styled";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

export default ({ children, onClick, active }: DropdownListHeaderProps) => {
	const Icon = active ? IconsActive.up : IconsActive.down;
	const colorActive = active ? "rgb(30,130,230)" : "gray";
	return (
		<DropdownListItemHeaderWrapper onClick={onClick}>
			{children}
			<Icon size={18} color={colorActive} />
		</DropdownListItemHeaderWrapper>
	);
};

const IconsActive = {
	up: IoIosArrowUp,
	down: IoIosArrowDown,
};

type DropdownListHeaderProps = {
	children?: React.ReactNode;
	onClick?: React.MouseEventHandler<HTMLElement>;
	active?: boolean;
};
