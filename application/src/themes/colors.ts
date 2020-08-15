export type ThemeColorsBase = {
	primary: string;
	primaryLight: string;
	primaryDark: string;
	neutral: string;
	neutralDarker: string;
	neutralDarkerMedium: string;
	neutralLight: string;
	neutralLightMedium: string;
};
export type ThemeColorsBaseIcon = {
	love: string;
	like: string;
	star: string;
};
export type ThemeColors = {
	colorsBase: ThemeColorsBase;
	colorsBaseIcons: ThemeColorsBaseIcon;
};

const colors: ThemeColors = {
	colorsBase: {
		primary: "#2196f3",
		primaryLight: "#ffffff",
		primaryDark: "#000000",
		neutral: "rgba(0,0,0,.6)",
		neutralDarker: "rgba(0,0,0,.1)",
		neutralDarkerMedium: "rgb(50,50,50)",
		neutralLight: "rgb(240,240,240)",
		neutralLightMedium: "#808080",
	},
	colorsBaseIcons: {
		love: "#FD2B83",
		like: "#0998D6",
		star: "#FBD71B",
	},
};

export default colors;
