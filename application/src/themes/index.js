import colors from "./colors";
import icons from "./icons";
import shadows from "./shadows";
import fontSizes from "./fontSizes";
import borders from "./borders";

const primary = {
	colors: {
		...colors.colorsBase,
	},
	fontSizes: {
		...fontSizes,
	},
	shadows: {
		...shadows,
	},
	borders : {
		...borders
	},
	icons: {
		...icons,
	},
};

export default primary;
