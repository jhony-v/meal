import styled from "themes/styled";
import { computePositionAbsolute } from "../styledUtils/css";
import { WrapperTypes } from "./Wrappers.types";

const propsBackdropColor = (props: WrapperTypes.UIBackdropProps) => {
	let color: number = props.light ? 255 : 0;
	const colorRGB: string = Array(3).fill(color).join(",");
	return { backgroundColor: `rgba(${colorRGB},0.8)` };
};

/**
 * Panel backdrop to encapsulate modals and others components
 */
export const UIBackdrop = styled.div<WrapperTypes.UIBackdropProps>((props) => ({
	position: "fixed",
	zIndex: 100,
	...computePositionAbsolute(),
	...propsBackdropColor(props),
}));
