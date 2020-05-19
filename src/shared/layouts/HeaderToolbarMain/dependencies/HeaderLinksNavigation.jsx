import React from 'react'
import Container from 'shared/styled/Container'
import FlexContainer from 'shared/styled/FlexContainer'
import { IoIosHome } from 'react-icons/io'
import { FaUser, FaGlobe } from 'react-icons/fa'
import HeaderLink from './HeaderLink'

export default function HeaderLinksNavigation() {
    return (
        <Container sizeWidth="25%">
            <FlexContainer justify="space-between" align="center">
                <HeaderLink to="/" icon={IoIosHome} selected>Home</HeaderLink>
                <HeaderLink to="/" icon={FaGlobe}>Trends</HeaderLink>
                <HeaderLink to="/" icon={FaUser}>Profile</HeaderLink>
            </FlexContainer>
        </Container>
    )
}

