import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { UIChip } from "shared/styled/UIChip";
import { UIContainer } from "shared/styled/UIContainer";
import { motion, AnimatePresence } from "framer-motion";
import { UIChipCloseButton } from "shared/styled/UIChip";

function ChipSimple({ children, onCloseComplete }) {
	const [closed, setClosed] = useState(true);
	return (
		<AnimatePresence onCloseComplete={onCloseComplete}>
			{closed && (
				<AnimatableChip initial={false} exit={{ opacity: 0, x: -40 }}>
					<UIContainer mr={2}>{children}</UIContainer>
					<UIChipCloseButton onClick={() => setClosed(!closed)}>
						<IoIosClose size={20} />
					</UIChipCloseButton>
				</AnimatableChip>
			)}
		</AnimatePresence>
	);
}

export default ChipSimple;

const AnimatableChip = motion.custom(UIChip);
