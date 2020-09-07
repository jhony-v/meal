import React from 'react'
import { UIContainer } from 'shared/styled/UIContainer.styled'
import { UIFlexContainer } from 'shared/styled/UIFlexContainer.styled'
import { IoIosHome } from 'react-icons/io'
import { FaUser, FaGlobe, FaRegEnvelope, FaHashtag } from 'react-icons/fa'
import routes from 'routes'
import NavigatorLink from 'shared/components/dumbs/NavigatorLink'

export default function HeaderLinksNavigation() {
    return (
        <UIContainer width="50%">
            <UIFlexContainer justifyContent="space-between" alignItems="center">
                <NavigatorLink exact to={routes.HOME.path} icon={IoIosHome}>Home</NavigatorLink>
                <NavigatorLink to="/trends" icon={FaHashtag}>More</NavigatorLink>
                <NavigatorLink to="/trends" icon={FaRegEnvelope}>Messages</NavigatorLink>
                <NavigatorLink to="/trends" icon={FaGlobe}>Trends</NavigatorLink>
                <NavigatorLink to={routes.PROFILE.path} icon={FaUser}>Profile</NavigatorLink>
            </UIFlexContainer>
        </UIContainer>
    )
}

