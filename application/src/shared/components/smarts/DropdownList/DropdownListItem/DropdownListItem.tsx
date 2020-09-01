import React, { memo } from 'react'
import { DropdownListItemWrapper } from '../styled';
import DropdownListItemHeader from './DropdownListItemHeader';
import DropdownListItemBody from './DropdownListItemBody';

const DropdownListItem = ({header,active,children,onSelectItem} : DropdownListItemProps) => {
	const onSelectDropDown = () => {
		active ? onSelectItem(true) : onSelectItem(false);
	};

	return (
		<DropdownListItemWrapper>
			<DropdownListItemHeader onClick={onSelectDropDown} active={active}>{header}</DropdownListItemHeader>
			<DropdownListItemBody active={active}>{children}</DropdownListItemBody>
		</DropdownListItemWrapper>
		);
}

export type DropdownListItemProps = {
	active?: boolean;
	header?: React.ReactNode;
	children: React.ReactNode;
	onSelectItem?: (selfActive : boolean) => void;
};


export default memo(DropdownListItem);
