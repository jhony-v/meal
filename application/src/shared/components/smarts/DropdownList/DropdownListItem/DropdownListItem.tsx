import React, { memo } from 'react'
import { DropdownListItemWrapper } from '../styled';
import DropdownListItemHeader from './DropdownListItemHeader';
import DropdownListItemBody from './DropdownListItemBody';
import { useDropdowntListContext } from '../Providers/DropDownListProvider';

const DropdownListItem = ({header,index,children,onClick} : DropdownListItemProps) => {
	const { dropdownIndex } = useDropdowntListContext();
	const active = dropdownIndex === index;

	return (
		<DropdownListItemWrapper>
			<DropdownListItemHeader onClick={onClick} active={active}>{header}</DropdownListItemHeader>
			<DropdownListItemBody active={active}>{children}</DropdownListItemBody>
		</DropdownListItemWrapper>
		);
}

export type DropdownListItemProps = {
	index?: number;
	header?: React.ReactNode;
	children: React.ReactNode;
	onClick?: React.MouseEventHandler<HTMLElement>;
};


export default memo(DropdownListItem);
