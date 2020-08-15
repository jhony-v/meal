import React, { ReactNode } from "react";
import { ThemeProvider } from "emotion-theming";
import themes from "../themes";

interface IAppTheme {
		children : ReactNode
}

function AppTheme(props : IAppTheme) : JSX.Element {
  return <ThemeProvider theme={themes}>{props.children}</ThemeProvider>;
}

export default AppTheme;
