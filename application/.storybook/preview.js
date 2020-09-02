import React from "react";
import "sass/base/reset.scss";
import { ThemeProvider } from "emotion-theming";
import primary from "themes";

export const parameters = {};
export const globalTypes = {};

export const decorators = [
	(Story) => (
		<ThemeProvider theme={primary}>
			<Story />
		</ThemeProvider>
	),
];
