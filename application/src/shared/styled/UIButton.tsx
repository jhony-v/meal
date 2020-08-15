import { memo } from "react";
import styled from "@emotion/styled";
import { variant, compose, layout } from "styled-system";

export const UIButton = memo(
	styled.button(
		(props) => ({
			"&:hover": {
				opacity: 0.8,
			},
			padding: "10px 20px",
			transition: "opacity 0.1s",
			borderRadius: "15px",
			fontSize: "13px",
			...(props.block && {
				display: "block",
				width: props.sizeWidth || "100%",
			}),
		}),
		variant({
			variants: {
				primary: {
					bg: "primary",
					color: "primaryLight",
				},
				outline: {
					color: "primary",
					border: "1px solid currentColor",
					fontWeight : "bold",
				},
				default: {
					color: "neutralLightMedium",
					bg: "neutralLight",
				},
			},
		}),
		compose(layout)
	)
);

UIButton.defaultProps = { variant: "default" };
