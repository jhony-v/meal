import React, { ReactNode } from "react";
import { ThemeProvider } from "emotion-theming";
import themes from "../themes";
import AppThemeGlobal from "./AppThemeGlobal";

type IAppTheme = {
	children: ReactNode;
};

function AppTheme(props: IAppTheme): JSX.Element {
	return (
		<ThemeProvider theme={themes}>
			<AppThemeGlobal />
			{props.children}
		</ThemeProvider>
	);
}

export default AppTheme;
