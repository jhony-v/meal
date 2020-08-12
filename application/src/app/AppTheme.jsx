import React from "react";
import { ThemeProvider } from "emotion-theming";
import themes from "../themes";

function AppTheme({ children }) {
  return <ThemeProvider theme={themes}>{children}</ThemeProvider>;
}

export default AppTheme;
