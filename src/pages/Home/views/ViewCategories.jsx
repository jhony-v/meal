import React, { Fragment } from 'react'
import Text from 'shared/styled/Text'
import Container from 'shared/styled/Container';
import RenderAllCategories from '../containers/RenderAllCategories';

const ViewCategories = () => {
    return (
        <Fragment>
            <Text weight size="big">Categories</Text>
            <Container margin="1em auto">
                    <RenderAllCategories/>
            </Container>
        </Fragment>
    )
}

export default ViewCategories;
