export module MThemes {
	type PartialTheme<PT> = readonly (keyof PT);
	/**
	 *  THEMES BASE OF DESIGN
	 */
	/** Main theme of props generate */
	export type ThemeBaseProps = {
		colors: ThemeColorsBase;
		fontSizes: ThemeFontSizes;
		shadows: ThemeShadows;
		borders: ThemeBorders;
		icons: ThemeColorsBaseIcon;
	};

	/** Structure of theme all colors by category */
	export type ThemeColors = {
		colorsBase: ThemeColorsBase;
		colorsBaseIcons: ThemeColorsBaseIcon;
	};

	/** Theme base of colors */
	export type ThemeColorsBaseTypes = PartialTheme<ThemeColorsBase>;
	export type ThemeColorsBase = {
		primary: string;
		primaryLight: string;
		primaryDark: string;
		neutral: string;
		neutralDarker: string;
		neutralDarkerMedium: string;
		neutralLight: string;
		neutralLightMedium: string;
		neutralLightSmall : string;
	};

	/** Theme colors of all icons created */
	export type ThemeColorsBaseIconTypes = PartialTheme<ThemeColorsBaseIcon>;
	export type ThemeColorsBaseIcon = {
		love: string;
		like: string;
		star: string;
	};

	/** Themes of shadows */
	export type ThemeShadowsTypes = PartialTheme<ThemeShadows>;
	export type ThemeShadows = {
		small: string;
		normal: string;
		medium: string;
		big: string;
	};

	/** Themes to font sizes of letters and icons */
	export type ThemeFontSizesTypes = PartialTheme<ThemeFontSizes>;
	export type ThemeFontSizes = {
		small: string[];
		normal: string[];
		big: string[];
	};

	/** Theme to all borders */
	export type ThemeBordersPropsTypes = "avatar.featured" | "avatar.outline"	| "loading.outset" | "card.flat";
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

	/**
	 * VARIANTS
	 * Themes personalized of components globals
	 */
	export type ThemesVariantButtonsTypes = "primary" | "outline" | "default";
}
