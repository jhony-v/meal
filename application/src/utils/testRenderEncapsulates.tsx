import React from "react";
import { ThemeProvider } from "emotion-theming";
import primary from "themes";
import { shallow } from "enzyme";

type ThemeProviderWrapperProps = {
	children: React.ReactNode;
};

const ThemeProviderWrapper = ({ children }: ThemeProviderWrapperProps) => {
	return <ThemeProvider theme={primary}>{children}</ThemeProvider>;
};

export const shallowWithEncapsulate = (tree: any) => {
	return shallow(tree, {
		wrappingComponent: ThemeProviderWrapper,
	});
};
