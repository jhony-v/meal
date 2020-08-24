import { useRouteMatch } from "react-router-dom";
import { useTheme } from "emotion-theming";
import { MThemes } from "themes/themes.types";

type RouteMatchProps = {
	path?: string;
	exact?: boolean;
};

export default (matchProps: RouteMatchProps) => {
	const theme = useTheme<MThemes.ThemeBaseProps>();
	const match = useRouteMatch(matchProps);
	const borderBottomCurrentColor = match && { borderBottom: "2px solid currentColor" };
	const cssColor = match ? theme.colors.primary : theme.colors.neutral;
	return { borderBottomCurrentColor, cssColor };
};
