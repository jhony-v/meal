import styled from "@emotion/styled";

const computeMargin = (props) => ({
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

const computePadding = (props) => ({
  padding: props.padding,
});

export const UIFlexContainer = styled.div(
  {
    display: "flex",
  },
  (props) => ({
    alignItems: props.align && props.align,
    justifyContent: props.justify && props.justify,
    flexDirection: props.flexDir && props.flexDir,
    flex: props.flex && props.flex,
    width: props.sizeWidth && props.sizeWidth,
    height: props.sizeHeight && props.sizeHeight,
    ...computeMargin(props),
    ...computePadding(props),
  })
);
