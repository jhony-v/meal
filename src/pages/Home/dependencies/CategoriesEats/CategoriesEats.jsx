import React, { Fragment } from 'react'
import { UIText } from 'shared/styled/UIText'
import { UIContainer } from 'shared/styled/UIContainer';
import ContainerAllEats from './ContainerAllEats';
import { UIAvatar } from 'shared/styled/UIAvatar';
import { FaHome } from 'react-icons/fa';

function CategoriesEats() {
    return (
        <Fragment>
            <UIText weight size="big">Categories</UIText>
            <UIContainer margin="1em auto">
                <ContainerAllEats />
                <UIAvatar isMaterial variant="primary"><FaHome/></UIAvatar>
            </UIContainer>
        </Fragment>
    )
}

export default CategoriesEats;
