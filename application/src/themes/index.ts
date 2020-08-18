import colors from "./themesDesign/colors.design";
import icons from "./themesComponent/icons";
import shadows from "./themesDesign/shadows.design";
import fontSizes from "./themesDesign/fontSizes.design";
import borders from "./themesDesign/borders.design";
import { MThemes } from "./themes.types";

const primary: MThemes.ThemeBaseProps = {
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
