import React, { memo } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { MThemes } from "themes/themes.types";
import { buttonsVariantNormal } from "themes/themesVariants/buttons.variants";
import { Link } from "react-router-dom";

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

type UIButtonProps = {
	block?: boolean;
	variant?: MThemes.ThemesVariantButtonsTypes;
};
export const UIButton = memo(styled.button<UIButtonProps>`
	${themeDefaultButton};
	${buttonsVariantNormal};
	${(props) => defineBlock(props)};
`);

