import React from "react";
import { MThemes } from "themes/themes.types";
import { useTheme } from "emotion-theming";
import { Global, css } from "@emotion/core";

function AppThemeGlobal(): JSX.Element {
	const theme = useTheme<MThemes.ThemeBaseProps>();
	return (
		<Global
			styles={css`
				body {
					background: ${theme.colors.primaryLight};
				}
			`}
		/>
	);
}
export default AppThemeGlobal;
