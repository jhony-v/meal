import React from 'react'
import Container from 'shared/styled/Container';
import { IoIosStar } from "react-icons/io";
import ThumbnailsCalification from '../components/ThumbnailsCalification';

const RenderAllCategories = () => {
    return (
        <Container>
            {Array(4).fill(0).map((current, index) => (
                <ThumbnailsCalification
                    img="https://cdn.pixabay.com/photo/2017/06/02/18/24/fruit-2367029__340.jpg"
                    title="Frutas naturales"
                    icon={IoIosStar}
                />
            ))}
        </Container>
    )
}

export default RenderAllCategories;