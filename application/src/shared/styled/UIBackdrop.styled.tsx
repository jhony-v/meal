import styled from "@emotion/styled";
import { computePositionAbsolute } from "./styledUtils/css";

const propsBackdropColor = (props: UIBackdropProps) => {
	let color: number = props.light ? 255 : 0;
	const colorRGB: string = Array(3).fill(color).join(",");
	return { backgroundColor: `rgba(${colorRGB},0.8)` };
};

/**
 * Panel backdrop to encapsulate modals and others components
 */
type UIBackdropProps = {
	light: boolean;
};
export const UIBackdrop = styled.div<UIBackdropProps>((props) => ({
	position: "fixed",
	zIndex: 100,
	...computePositionAbsolute(),
	...propsBackdropColor(props),
}));
