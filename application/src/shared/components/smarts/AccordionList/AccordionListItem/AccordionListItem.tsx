import React, { memo } from 'react'
import { AccordionListItemWrapper } from '../styled';
import DropdownListItemHeader from './AccordionListItemHeader';
import DropdownListItemBody from './AccordionListItemBody';

const DropdownListItem = ({header,active,children,onSelectItem} : AccordionListItemProps) => {
	const onSelectDropDown = () => {
		active ? onSelectItem(true) : onSelectItem(false);
	};

	return (
		<AccordionListItemWrapper>
			<DropdownListItemHeader onClick={onSelectDropDown} active={active}>{header}</DropdownListItemHeader>
			<DropdownListItemBody active={active}>{children}</DropdownListItemBody>
		</AccordionListItemWrapper>
		);
}

export type AccordionListItemProps = {
	active?: boolean;
	header?: React.ReactNode;
	children: React.ReactNode;
	onSelectItem?: (selfActive : boolean) => void;
};


export default memo(DropdownListItem);
