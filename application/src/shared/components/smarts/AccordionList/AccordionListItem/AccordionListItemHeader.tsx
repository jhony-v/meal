import React from "react";
import { AccordionListItemHeaderWrapper, AccordionListIconWrapper } from "../styled";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

export default ({ children, onClick, active }: DropdownListHeaderProps) => {
	const Icon = active ? IconsActive.up : IconsActive.down;
	
	return (
		<AccordionListItemHeaderWrapper onClick={onClick}>
			{children}
			<AccordionListIconWrapper active={active}>
				<Icon size={18} />
			</AccordionListIconWrapper>
		</AccordionListItemHeaderWrapper>
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
