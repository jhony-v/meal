import React from 'react'
import Container from 'shared/styled/Container'
import FlexContainer from 'shared/styled/FlexContainer'
import { Link } from 'react-router-dom'
import Text from 'shared/styled/Text'

export default function HeaderLinksNavigation() {
    return (
        <Container sizeWidth="20%">
            <FlexContainer justify="space-between">
            <Link to=""><Text weight>Home</Text></Link>
            <Link to=""><Text weight>Trends</Text></Link>
            <Link to=""><Text weight>Profile</Text></Link>
            </FlexContainer>
        </Container>
    )
}

