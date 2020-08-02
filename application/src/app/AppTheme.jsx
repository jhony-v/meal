import React from "react";
import { ThemeProvider } from "emotion-theming";
import primary from "../themes/primary";

function AppTheme({ children }) {
  return <ThemeProvider theme={primary}>{children}</ThemeProvider>;
}

export default AppTheme;
