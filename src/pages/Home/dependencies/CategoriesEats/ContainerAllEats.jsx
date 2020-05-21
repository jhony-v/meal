import React from 'react'
import { UIContainer } from 'shared/styled/UIContainer';
import { IoIosStar } from "react-icons/io";
import ThumbnailsCalification from '../components/ThumbnailsCalification';

function ContainerAllEats() {
    return (
        <UIContainer>
            {Array(4).fill(0).map((current, index) => (
                <ThumbnailsCalification
                    key={index}
                    image={`https://source.unsplash.com/collection/${Math.floor(Math.random() * 1000)}`}
                    title="Frutas naturales"
                    icon={IoIosStar}
                    points={Math.floor(Math.random() * 1000)}
                />
            ))}
        </UIContainer>
    )
}

export default ContainerAllEats;