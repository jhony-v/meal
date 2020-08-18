import { variant } from "styled-system";

const layoutContainerVariant = variant({
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

export default layoutContainerVariant;
