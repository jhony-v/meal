import React, { memo } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { MThemes } from "themes/themes.types";
import { buttonsVariantNormal } from "themes/themesVariants/buttons.variants";
import { Link } from "react-router-dom";
import { UIAvatar } from "./UIAvatar.styled";
import { compose, shadow, BoxShadowProps } from "styled-system";

/**
 * styles shared between buttons
 */
const defineBlock = (props: UIButtonProps) => props.block && css`display: block;width: 100%;`;
const themeDefaultButton = css`
	&:hover {
		opacity: 0.9;
	}
	padding: 10px 20px;
	transition: opacity .1s, background-color .3s;
	border-radius: 15px;
	font-size: 13px;
	display: inline-block;
	text-align: center;
`;

/**
 * Link button with equal style to button 
 */
type UIButtonLinkProps = UIButtonProps & {
	to?: string;
	className?: string;
	children?: React.ReactNode | string;
};
export const UIButtonLink = styled(( props : UIButtonLinkProps) => (
	<Link to={props.to} className={props.className}>{props.children}</Link>
))<UIButtonLinkProps>`
	${themeDefaultButton};
	${buttonsVariantNormal};
	${(props) => defineBlock(props)};
`;

/**
 * Button base global 
 */
type UIButtonProps = {
	block?: boolean;
	variant?: MThemes.ThemesVariantButtonsTypes;
};
export const UIButton = styled.button<UIButtonProps>`
	${themeDefaultButton};
	${buttonsVariantNormal};
	${(props) => defineBlock(props)};
`;

/**
 * Floating botton with avatar component inheritance. 
 * This componente receive a react icon component
 */
export const UIButtonFloating = styled(UIAvatar)<BoxShadowProps>`
	position: fixed;
	bottom: 20px;
	right: 20px;
	cursor: pointer;
	&:hover {
		animation: shake-active .3s 1;
		@keyframes shake-active {
			from {
				transform: rotate(30deg)
			}
			50% {
				transform: rotate(-30deg);
			}
		}
	}
	${(compose(shadow))};
`
UIButtonFloating.defaultProps = {
	boxShadow : "big",
	bg: "primary",
	color: "primaryLight",
	size: 50,
}