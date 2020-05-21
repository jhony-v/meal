import React, { Fragment } from 'react'
import { UIText } from 'shared/styled/UIText'
import { UIContainer } from 'shared/styled/UIContainer';
import ContainerAllEats from './ContainerAllEats';
import { UILoading } from "shared/styled/UILoading";

function CategoriesEats() {
    return (
        <Fragment>
            <UIText weight size="big">Categories</UIText>
            <UIContainer margin="1em auto">
                <ContainerAllEats />
                <UILoading/>
            </UIContainer>
        </Fragment>
    )
}

export default CategoriesEats;
