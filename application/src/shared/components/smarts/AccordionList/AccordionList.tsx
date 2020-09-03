import React, { useState } from "react";
import { AccordionListMainWrapper } from "./styled";
import AccordionListItem, { AccordionListItemProps } from "./AccordionListItem/AccordionListItem";

const AccordionList = ({ children, initial }: AccordionListProps) => {
	const [accordionIndex, setActiveAccordion] = useState<number>(initial);

	return (
		<AccordionListMainWrapper>
			{React.Children.map( children, (child: React.ReactElement<AccordionListItemProps>, index: number) =>
					React.cloneElement(child, {
						onSelectItem: (selfActive: boolean) => {
							selfActive ? setActiveAccordion(-1) : setActiveAccordion(index);
						},
						active: accordionIndex === index,
					})
			)}
		</AccordionListMainWrapper>
	);
};

AccordionList.Item = AccordionListItem;

type AccordionListProps = {
	children: React.ReactNode;
	initial?: number;
};

export default AccordionList;
