import React from 'react'
import { UIContainer } from 'shared/styled/UIContainer'
import { UIFlexContainer } from 'shared/styled/UIFlexContainer'
import { IoIosHome } from 'react-icons/io'
import { FaUser, FaGlobe, FaRegEnvelope, FaAsterisk } from 'react-icons/fa'
import routes from 'routes'
import NavigatorLink from 'shared/components/dumbs/NavigatorLink'

export default function HeaderLinksNavigation() {
    return (
        <UIContainer sizeWidth="50%">
            <UIFlexContainer justify="space-between" align="center">
                <NavigatorLink to={routes.HOME.path} icon={IoIosHome}>Home</NavigatorLink>
                <NavigatorLink to="/trends" icon={FaAsterisk}>More</NavigatorLink>
                <NavigatorLink to="/trends" icon={FaRegEnvelope}>Messages</NavigatorLink>
                <NavigatorLink to="/trends" icon={FaGlobe}>Trends</NavigatorLink>
                <NavigatorLink to={routes.PROFILE.path} icon={FaUser}>Profile</NavigatorLink>
            </UIFlexContainer>
        </UIContainer>
    )
}

