import { css } from "@emotion/core";

export const computeMargin = (props) => ({
  margin: props.margin,
  ...(props.marginVertical && {
    marginTop: props.marginVertical,
    marginBottom: props.marginVertical,
  }),
  ...(props.marginHorizontal && {
    marginLeft: props.marginHorizontal,
    marginRight: props.marginHorizontal,
  }),
});

export const computePadding = (props) => ({
  padding: props.padding,
});

export const computeGridRepeatTemplateColumns = (props) => {
  if (props.repeatColumns) {
    return css(`
        grid-template-columns:repeat(${props.repeatColumns},1fr);
        `);
  } else if (props.sizeColumns) {
    return css(`
        grid-template-columns:${props.sizeColumns.join(" ")};
        `);
  }
};

export const computeBlockElement = (props) => {
  return props.block && css(`display:block;width:100%;`);
};
