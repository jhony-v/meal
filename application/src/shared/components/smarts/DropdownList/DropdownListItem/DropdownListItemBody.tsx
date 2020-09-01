import React from "react";
import { AnimatePresence, Variants } from "framer-motion";
import { DropdownListItemBodyWrapper } from "../styled";

export default ({ children, active }: DropdownListBodyProps) => {
	return (
		<AnimatePresence>
			{active && (
				<DropdownListItemBodyWrapper variants={variants} initial="close" exit="close" animate="open" >
					{children}
				</DropdownListItemBodyWrapper>
			)}
		</AnimatePresence>
	);
};

const variants: Variants = {
	open: {
		opacity: 1,
		height: "auto",
	},
	close: {
		opacity: 0,
		height: 0,
	},
};

type DropdownListBodyProps = {
	children: React.ReactNode;
	active?: boolean;
};
