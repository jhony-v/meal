import React from 'react'
import Container from 'shared/styled/Container';
import { jsx } from "@emotion/core"

/**@jsx jsx */

const css = {
    padding: "1em",
}

const ColumnNavigator = {
    CenterViewNews({ children, ...props }) {
        return (
            <Container sizeWidth="620px" margin="0 2em" flex="none"  {...css} {...props}>
                {children}
            </Container>
        )
    },
    Aside({ children, ...props }) {
        return (
            <Container variantColor="layout" sizeWidth="100%"  {...css} {...props} >
                {children}
            </Container>
        )
    }
}

export default ColumnNavigator;