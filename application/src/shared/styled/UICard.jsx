import styled from "@emotion/styled";
import { space, borderRadius } from "styled-system";

export const UICard = styled.div(
	(props) => ({
		borderRadius: "10px",
		padding: "10px",
		boxShadow: "0 10px 10px rgba(0,0,0,.01)",
		backgroundColor: props.theme.colors.light,
	}),
	space,
	borderRadius
);

export const UICardFlat = styled.div(
	(props) => ({
		border: `1px solid ${props.theme.colors.grayLight1}`,
	}),
	borderRadius
);
