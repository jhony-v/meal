import React from 'react'
import Container from 'shared/styled/Container';
import { IoIosStar } from "react-icons/io";
import ThumbnailsCalification from '../components/ThumbnailsCalification';

const RenderAllCategories = () => {
    return (
        <Container>
            {Array(4).fill(0).map((current, index) => (
                <ThumbnailsCalification
                    key={index}
                    img={`https://source.unsplash.com/collection/${Math.floor(Math.random() * 1000)}`}
                    title="Frutas naturales"
                    icon={IoIosStar}
                    points={Math.floor(Math.random()*1000)}
                />
            ))}
        </Container>
    )
}

export default RenderAllCategories;