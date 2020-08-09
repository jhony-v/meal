import { css } from "@emotion/core";
import variables from "../styledConstants/variables";

export const computeMargin = (props) => css`
	margin-left: ${props.marginLeft};
	margin-right: ${props.marginRight};
	margin-top: ${props.marginTop};
	margin-bottom: ${props.marginBottom};
	margin: ${props.margin};
	${props.marginVertical &&
	css`
		margin-top: ${props.marginVertical};
		margin-bottom: ${props.marginVertical};
	`}
	${props.marginHorizontal &&
	css`
		margin-left: ${props.marginHorizontal};
		margin-right: ${props.marginHorizontal};
	`};
`;

export const computePadding = (props) => css`
	padding: ${props.padding};
`;

export const computeGridRepeatTemplateColumns = (props) => {
	if (props.repeatColumns) {
		return css`
			grid-template-columns: repeat(${props.repeatColumns}, 1fr);
		`;
	} else if (props.sizeColumns) {
		return css`
			grid-template-columns: ${props.sizeColumns.join(" ")};
		`;
	}
};

export const computeBlockElement = (props) => {
	return (
		props.block &&
		css`
			display: block;
			width: ${props.sizeWidth || "100%"};
		`
	);
};

export const computeHeightHeaderNavigator = (props) => css`
	height: ${props.heightToolbar || variables.heightToolbar};
`;
export const computeDrawerLayoutActive = (props) => css`
	padding-top: ${props.isMainContainerLayout && variables.heightToolbar};
`;
