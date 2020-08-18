import styled from "themes/styled";
import {
	space,
	borderRadius,
	boxShadow,
	borders,
	compose,
	SpaceProps,
	BorderRadiusProps,
} from "styled-system";
import { MThemes } from "themes/themes.types";

/**
 * Styled component Card shadow
 */
type UICardProps = {
	boxShadow?: MThemes.ThemeShadowsTypes;
};
export const UICard = styled.div<SpaceProps & BorderRadiusProps & UICardProps>`
	border-radius: 10px;
	padding: 10px;
	background: ${(props) => props.theme.colors.primaryLight};
	${compose(space, borderRadius, boxShadow)}
`;
UICard.defaultProps = { boxShadow: "normal" };
/**
 * Styled component Card with border simple
 */
export const UICardFlat = styled.div(borderRadius, borders);
UICardFlat.defaultProps = { border: "card.flat" };
