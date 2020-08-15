import React, { memo, ReactNode } from "react";
import { UIContainer } from "shared/styled/UIContainer";

function FlatList({ data, render, renderHeader, renderFooter } : FlatListProps) {
  const _header = renderHeader && <UIContainer>{renderHeader}</UIContainer>;
  const _footer = renderFooter && <UIContainer>{renderFooter}</UIContainer>;
  const _render = !!data.length && <UIContainer>{data.map((e, i) => render(e, i))}</UIContainer>;

  return (
    <UIContainer>
      {_header}
      {_render}
      {_footer}
    </UIContainer>
  );
}

type FlatListProps = {
	data : any[];
	render ?: Function;
	renderHeader ?: string | ReactNode;
	renderFooter ?: string | ReactNode;
} typeof defaultProps ;

const defaultProps = {
  data: [],
  renderHeader: null,
  renderFooter: null,
};

export default memo(FlatList);
