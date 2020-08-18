import { variant } from "styled-system";

export const layoutContainerVariants = variant({
	prop: "variantColor",
	variants: {
		lightMedium: {
			backgroundColor: "neutralLightMedium",
		},
		light: {
			backgroundColor: "primaryLight",
		},
	},
});
