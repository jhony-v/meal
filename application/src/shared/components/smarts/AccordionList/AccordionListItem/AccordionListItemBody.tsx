import React from "react";
import { AnimatePresence } from "framer-motion";
import { AccordionListItemBodyWrapper } from "../styled";

export default ({ children, active }: DropdownListBodyProps) => {
	return (
		<AnimatePresence>
			{active && (
				<AccordionListItemBodyWrapper initial="close" exit="close" animate="open" >
					{children}
				</AccordionListItemBodyWrapper>
			)}
		</AnimatePresence>
	);
};

type DropdownListBodyProps = {
	children: React.ReactNode;
	active?: boolean;
};
