import React from "react";
import { AnimatePresence, useCycle } from "framer-motion";
import { UIContainerAnimated, UIToolTipAnimated, UIToolTipAnimatedVariantProps } from "./styled";

const AnimatableTooltip = ({children,tooltipMessage}: AnimatableTooltipProps) => {
	const [visible, cycle] = useCycle<boolean>(false, true);
	return (
		<UIContainerAnimated position="relative" onHoverStart={() => cycle()} onHoverEnd={() => cycle()} >
			{children}
			<AnimatePresence>
				{visible && <UIToolTipAnimated variant={tooltipMessage.variant}>
						{tooltipMessage.content}
					</UIToolTipAnimated>}
			</AnimatePresence>
		</UIContainerAnimated>
	);
};

type AnimatableTooltipProps = {
	children: React.ReactNode;
	tooltipMessage?: {
		content ?: string | React.ReactNode;
		variant ?: UIToolTipAnimatedVariantProps;
	};
};



export default AnimatableTooltip;
