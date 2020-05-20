import React from 'react'
import UIContainer from 'shared/styled/UIContainer'
import UIFlexContainer from 'shared/styled/UIFlexContainer'
import { IoIosHome } from 'react-icons/io'
import { FaUser, FaGlobe } from 'react-icons/fa'
import HeaderLink from './HeaderLink'

export default function HeaderLinksNavigation() {
    return (
        <UIContainer sizeWidth="25%">
            <UIFlexContainer justify="space-between" align="center">
                <HeaderLink to="/" icon={IoIosHome} selected>Home</HeaderLink>
                <HeaderLink to="/" icon={FaGlobe}>Trends</HeaderLink>
                <HeaderLink to="/" icon={FaUser}>Profile</HeaderLink>
            </UIFlexContainer>
        </UIContainer>
    )
}

