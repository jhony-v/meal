import styled from "@emotion/styled";
import { height, width } from "styled-system";

export const UIVideoSimple = styled.video(
	(props) => ({
		userSelect: "none",
		objectFit: "cover",
		display: "block",
		height: props.fullScreen && "100% !important",
	}),
	height,
	width
);

UIVideoSimple.defaultProps = { width: "100%", height: 180 };
