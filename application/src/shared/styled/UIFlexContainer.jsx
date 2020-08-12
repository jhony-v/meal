import styled from "@emotion/styled";
import { flexbox, layout, margin, padding, position , width, height} from "styled-system";

export const UIFlexContainer = styled.div(
	{
		display: "flex",
	},
	flexbox,
	layout,
	width,
	height,
	margin,
	padding,
	position
);
