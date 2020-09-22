import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import AccordionList from "shared/components/smarts/AccordionList";
import { UIContainer } from "shared/styled/UIContainer.styled";

export default {
	title: "Forms/AccordionList",
	component: AccordionList,
} as Meta;

export const Default = () => {
	return (
		<AccordionList>
			<AccordionList.Item header="item 1">
				<UIContainer p={2}>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
					nam accusamus aperiam possimus iste quos consectetur? Numquam vitae
					quod minima, reiciendis totam in excepturi, dolor eveniet labore
					aperiam veniam molestiae.
				</UIContainer>
			</AccordionList.Item>
			<AccordionList.Item header="item 2">
				<UIContainer p={2}>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
					nam accusamus aperiam possimus iste quos consectetur? Numquam vitae
					quod minima, reiciendis totam in excepturi, dolor eveniet labore
					aperiam veniam molestiae.
				</UIContainer>
			</AccordionList.Item>
			<AccordionList.Item header="item 3">
				<UIContainer p={3}>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
					nam accusamus aperiam possimus iste quos consectetur? Numquam vitae
					quod minima, reiciendis totam in excepturi, dolor eveniet labore
					aperiam veniam molestiae.
				</UIContainer>
			</AccordionList.Item>
		</AccordionList>
	);
};
