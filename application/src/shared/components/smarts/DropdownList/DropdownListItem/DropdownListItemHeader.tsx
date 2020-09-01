import React from "react";
import { DropdownListItemHeaderWrapper, DropdownListIconWrapper } from "../styled";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

export default ({ children, onClick, active }: DropdownListHeaderProps) => {
	const Icon = active ? IconsActive.up : IconsActive.down;
	
	return (
		<DropdownListItemHeaderWrapper onClick={onClick}>
			{children}
			<DropdownListIconWrapper active={active}>
				<Icon size={18} />
			</DropdownListIconWrapper>
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
