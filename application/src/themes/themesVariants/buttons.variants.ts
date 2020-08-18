import { variant } from "styled-system";

const buttonsVariant = variant({
	variants: {
		primary: {
			bg: "primary",
			color: "primaryLight",
		},
		outline: {
			color: "primary",
			border: "1px solid currentColor",
			fontWeight: "bold",
		},
		default: {
			color: "neutralLightMedium",
			bg: "neutralLight",
		},
	},
});

export default buttonsVariant;
