import React from 'react'
import { UIContainer } from 'shared/styled/UIContainer';
import { jsx } from "@emotion/core"

/**@jsx jsx */

const css = {
    padding: "1em",
}

const ColumnNavigator = {
    CenterViewNews({ children, ...props }) {
        return (
            <UIContainer sizeWidth="620px" margin="0 2em" flex="none"  {...css} {...props}>
                {children}
            </UIContainer>
        )
    },
    Aside({ children, ...props }) {
        return (
            <UIContainer variantColor="layout" sizeWidth="100%"  {...css} {...props} >
                {children}
            </UIContainer>
        )
    }
}

export default ColumnNavigator;