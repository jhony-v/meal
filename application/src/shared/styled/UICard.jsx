import styled from "@emotion/styled";
import { space, borderRadius, boxShadow } from "styled-system";

export const UICard = styled.div(
	(props) => ({
		borderRadius: "10px",
		padding: "10px",
		backgroundColor: props.theme.colors.primaryLight,
	}),
	space,
	borderRadius,
	boxShadow
);
UICard.defaultProps = { boxShadow: "0 10px 10px rgba(0,0,0,.01)" };

export const UICardFlat = styled.div(
	(props) => ({
		border: `1px solid ${props.theme.colors.neutralLight}`,
	}),
	borderRadius
);
