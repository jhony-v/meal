import React from 'react'
import { UIContainer } from 'shared/styled/UIContainer';
import { IoIosStar } from "react-icons/io";
import ThumbnailsCalification from '../components/ThumbnailsCalification';
import { FaHome } from 'react-icons/fa';

function ContainerAllEats() {
    return (
        <UIContainer>
            {Array(4).fill(0).map((current, index) => (
                <ThumbnailsCalification
                    key={index}
                    avatarIcon={<FaHome/>}
                    title="Frutas naturales"
                    icon={<IoIosStar/>}
                    bgColorAvatar="blue"
                    points={Math.floor(Math.random() * 1000)}
                />
            ))}
        </UIContainer>
    )
}

export default ContainerAllEats;