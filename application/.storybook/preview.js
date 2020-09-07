import React from "react";
import "sass/base/reset.scss";
import { ThemeProvider } from "emotion-theming";
import primary from "themes";
import { jsxDecorator } from "storybook-addon-jsx";

export const parameters = {};
export const globalTypes = {};

export const decorators = [
	jsxDecorator,
	(Story) => (
		<ThemeProvider theme={primary}>
				<Story />
		</ThemeProvider>
	),
];
