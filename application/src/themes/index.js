import colors from "./colors";

// primary: "#2196f3", -
// light: "#ffffff", -
// dark: "#000000", -
// grayDarkBorder: "rgba(0,0,0,.1)", // rgba(255,255,255,.2)
// grayLight1: "rgb(240,240,240)", -
// grayDark1: "#808080",  -
// grayDark2: "rgba(0,0,0,.6)", // silver -
// grayDark3: "rgb(50,50,50)",-

const primary = {
	colors: {
		...colors.colorsBase,
	},
	fontSize: {
		small: 0.9,
		small2: 0.8,
		small3: 0.7,
		regular: 1,
		big: 1.1,
		big2: 1.2,
		big3: 1.3,
	},
	shadows: {
		normal: "",
		medium: "",
		big: "",
	},
	borders: {},
	space: {},
	radii: {},
	icons: {
		color: {
			...colors.colorsBaseIcons,
		},
	},
};

export default primary;
