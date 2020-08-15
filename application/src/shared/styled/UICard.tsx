import styled from "@emotion/styled";
import system, { space, borderRadius, boxShadow, borders } from "styled-system";

type UICardProps = system.SpaceProps &
	system.BorderRadiusProps &
	system.BoxShadowProps;

export const UICard = styled.div<UICardProps>(
	(props: any) => ({
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
