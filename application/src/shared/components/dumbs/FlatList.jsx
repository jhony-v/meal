import React, { memo } from "react";
import PropTypes from "prop-types";
import { UIContainer } from "shared/styled/UIContainer";

function FlatList({ data, render, renderHeader, renderFooter }) {
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

FlatList.defaultProps = {
  data: [],
  renderHeader: null,
  renderFooter: null,
};

FlatList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any).isRequired,
  render: PropTypes.func.isRequired,
  renderHeader: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  renderFooter: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};

export default memo(FlatList);
