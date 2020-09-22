import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { Link } from "react-router-dom";
import { UIAvatar } from "../StyledAvatars/UIAvatar.styled";
import { compose, shadow, BoxShadowProps } from "styled-system";
import { ButtonVariant } from "./Button.variants";
import { ButtonTypes } from "./Button.types";

/**
 * styles shared between buttons
 */
const defineBlock = (props: ButtonTypes.UIButtonProps) =>
	props.block &&
	css`
		display: block;
		width: 100%;
	`;
const themeDefaultButton = css`
	&:hover {
		opacity: 0.9;
	}
	padding: 10px 20px;
	transition: opacity 0.1s, background-color 0.3s;
	border-radius: 15px;
	font-size: 13px;
	display: inline-block;
	text-align: center;
`;

/**
 * Link button with equal style to button
 */
export const UIButtonLink = styled((props: ButtonTypes.UIButtonLinkProps) => (
	<Link to={props.to} className={props.className}>
		{props.children}
	</Link>
))<ButtonTypes.UIButtonLinkProps>`
	${(props) => defineBlock(props)};
	${themeDefaultButton};
	${ButtonVariant};
`;

/**
 * Button base global
 */
export const UIButton = styled.button<ButtonTypes.UIButtonProps>`
	${(props) => defineBlock(props)};
	${themeDefaultButton};
	${ButtonVariant}
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
		animation: shake-active 0.3s 1;
		@keyframes shake-active {
			from {
				transform: rotate(30deg);
			}
			50% {
				transform: rotate(-30deg);
			}
		}
	}
	${compose(shadow)};
`;
UIButtonFloating.defaultProps = {
	boxShadow: "big",
	bg: "primary",
	color: "primaryLight",
	size: 50,
};
