import React from "react";
import { DropdownListMainWrapper } from "./styled";
import DropdownListItem, { DropdownListItemProps } from "./DropdownListItem/DropdownListItem";
import DropDownListProvider, {
	DropdownListConsumer,
} from "./Providers/DropDownListProvider";

const DropdownList = ({ children, initial }: DropdownListProps) => {
	return (
		<DropdownListMainWrapper>
			<DropDownListProvider initial={initial}>
				{React.Children.map(children,(child: React.ReactElement<DropdownListItemProps>, index: number) => (
						<DropdownListConsumer>
							{({setActiveDropdownIndex}) =>
								React.cloneElement(child, {
									onClick: () => setActiveDropdownIndex(index),
									index: index,
								})
							}
						</DropdownListConsumer>
					)
				)}
			</DropDownListProvider>
		</DropdownListMainWrapper>
	);
};

DropdownList.Item = DropdownListItem;

type DropdownListProps = {
	children: React.ReactNode;
	initial?: number;
};

export default DropdownList;
