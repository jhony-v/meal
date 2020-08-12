const { override, addBabelPresets } = require("customize-cra");

module.exports = override(
	...addBabelPresets([
		"@emotion/babel-preset-css-prop",
		{
			autoLabel: false,
			sourceMap: false,
			labelFormat: "[local]",
			cssPropOptimization: true,
		},
	])
);
