import React from "react";
import { DropdownListMainWrapper } from "./styled";
import DropdownListItem, { DropdownListItemProps } from "./DropdownListItem/DropdownListItem";
import DropDownListProvider, {	DropdownListConsumer } from "./Providers/DropDownListProvider";

const DropdownList = ({ children, initial }: DropdownListProps) => {
	return (
		<DropdownListMainWrapper>
			<DropDownListProvider initial={initial}>
				{React.Children.map(children,(child: React.ReactElement<DropdownListItemProps>, index: number) => (
						<DropdownListConsumer>
							{(props) =>
								React.cloneElement(child, {
									onSelectItem: (selfActive : boolean) => { 
										selfActive ?  props.setActiveDropdownIndex(-1) : props.setActiveDropdownIndex(index) 
									},
									active : props.dropdownIndex === index,
							})}
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
