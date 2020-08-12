import styled from "@emotion/styled";
import { space, borderRadius, boxShadow, borders } from "styled-system";

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
UICard.defaultProps = { boxShadow: "normal" };

export const UICardFlat = styled.div(borderRadius, borders);
UICardFlat.defaultProps = { border: "card.flat" };
