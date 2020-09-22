import React, { memo, useState, ReactNode } from "react";
import { IoIosClose } from "react-icons/io";
import { UIChip } from "shared/styled/StyledActionsCommon/UIChip.styled";
import { UIContainer } from "shared/styled/StyledWrappers/UIContainer.styled";
import { motion, AnimatePresence } from "framer-motion";
import { UIChipCloseButton } from "shared/styled/StyledActionsCommon/UIChip.styled";

function ChipSimple({ children, onCloseComplete, noRemove, ...restProps } : ChipSimpleProps & any) {
	const [closed, setClosed] = useState<boolean>(true);
	
	// show this button if the componente have the noRemove prop active
	const chipCloseButton = () => (!noRemove && (
		<UIChipCloseButton onClick={() => setClosed(!closed)}>
			<IoIosClose size={20} />
		</UIChipCloseButton>
	));

	return (
		<AnimatePresence onExitComplete={onCloseComplete}>
			{closed && (
				<AnimatableChip {...restProps} initial={false} exit={{ opacity: 0, x: -40 }} >
					<UIContainer mr={2}>{children}</UIContainer>
					{chipCloseButton()}
				</AnimatableChip>
			)}
		</AnimatePresence>
	);
}

type ChipSimpleProps = {
	children : string | ReactNode;
	onCloseComplete ?: () => void;
	noRemove ?: boolean;
}

export default memo(ChipSimple);

const AnimatableChip = motion.custom(UIChip);
