import colors from "./colors";

export type ThemeBorders = {
	avatar: {
		featured: string;
		outline: string;
	};
	loading: {
		outset: string;
	};
	card: {
		flat: string;
	};
};

const borders : ThemeBorders = {
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
