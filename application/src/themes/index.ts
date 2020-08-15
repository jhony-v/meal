import colors, { ThemeColorsBase, ThemeColorsBaseIcon } from "./colors";
import icons from "./icons";
import shadows, { ThemeShadows } from "./shadows";
import fontSizes, { ThemeFontSizes } from "./fontSizes";
import borders, { ThemeBorders } from "./borders";

export type ThemeBase = {
	colors: ThemeColorsBase;
	fontSizes: ThemeFontSizes;
	shadows: ThemeShadows;
	borders: ThemeBorders;
	icons: ThemeColorsBaseIcon;
};

const primary: ThemeBase = {
	colors: {
		...colors.colorsBase,
	},
	fontSizes: {
		...fontSizes,
	},
	shadows: {
		...shadows,
	},
	borders: {
		...borders,
	},
	icons: {
		...icons,
	},
};

export default primary;
