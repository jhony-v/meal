import colors from "./colors.design";
import { MThemes } from "../themes.types";

const borders: MThemes.ThemeBorders = {
	avatar: {
		featured: `2px solid ${colors.colorsBase.primary}`,
		outline: `1px solid ${colors.colorsBase.neutralDarker}`,
	},
	loading: {
		outset: `3px solid ${colors.colorsBase.neutralLight}`,
	},
	card: {
		flat: `1px solid ${colors.colorsBase.neutralLight}`,
	},
};

export default borders;
