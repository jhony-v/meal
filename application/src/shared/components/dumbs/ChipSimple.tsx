import React, { memo, useState, ReactNode } from "react";
import { IoIosClose } from "react-icons/io";
import { UIChip } from "shared/styled/UIChip.styled";
import { UIContainer } from "shared/styled/UIContainer.styled";
import { motion, AnimatePresence } from "framer-motion";
import { UIChipCloseButton } from "shared/styled/UIChip.styled";

function ChipSimple({ children, onCloseComplete, noRemove, ...restProps } : ChipSimpleProps & any) {
	const [closed, setClosed] = useState<boolean>(true);
	return (
		<AnimatePresence onExitComplete={onCloseComplete}>
			{closed && (
				<AnimatableChip {...restProps} initial={false} exit={{ opacity: 0, x: -40 }} >
					<UIContainer mr={2}>{children}</UIContainer>
					{!noRemove && (
						<UIChipCloseButton onClick={() => setClosed(!closed)}>
							<IoIosClose size={20} />
						</UIChipCloseButton>
					)}
				</AnimatableChip>
			)}
		</AnimatePresence>
	);
}

type ChipSimpleProps = {
	children : string | ReactNode;
	onCloseComplete : () => void;
	noRemove : boolean;
}

export default memo(ChipSimple);

const AnimatableChip = motion.custom(UIChip);
