import React from 'react'
import Container from 'shared/styled/Container'
import FlexContainer from 'shared/styled/FlexContainer'
import { Link } from 'react-router-dom'
import Text from 'shared/styled/Text'
import Span from 'shared/styled/Span'
import { IoIosHome } from 'react-icons/io'
import { FaUser, FaGlobe } from 'react-icons/fa'

const LinkNavigation = ({ to, icon: IconLink, children, ...props }) => {
    return (
        <Link to={to}>
            <FlexContainer justify="center">
                <IconLink />
                <Container margin="0 0 0 10px">
                    <Text weight><Span>{children}</Span></Text>
                </Container>
            </FlexContainer>
        </Link>
    );
}

export default function HeaderLinksNavigation() {
    return (
        <Container sizeWidth="25%">
            <FlexContainer justify="space-between">
                <LinkNavigation to="/" icon={IoIosHome}>Home</LinkNavigation>
                <LinkNavigation to="/" icon={FaGlobe}>Trends</LinkNavigation>
                <LinkNavigation to="/" icon={FaUser}>Profile</LinkNavigation>
            </FlexContainer>
        </Container>
    )
}

