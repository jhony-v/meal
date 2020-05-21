import styled from "@emotion/styled";
import { css } from "@emotion/core";

const gridTemplateColumns = (props) => {
    if (props.repeatColumns) {
        return css(`
        grid-template-columns:repeat(${props.repeatColumns},1fr);
        `)
    }
    else if (props.sizeColumns) {
        return css(`
        grid-template-columns:${sizeColumns.join(' ')};
        `)
    }
}

export const UIGrid = styled.div`
    display:grid;
    gap:${props => props.gap && props.gap};
    ${gridTemplateColumns}
`

export const UIGridItem = styled.div`
    grid-column: ${props => props.gridColumn && props.gridColumn};
    grid-row:${props => props.gridRow && props.gridRow};
`