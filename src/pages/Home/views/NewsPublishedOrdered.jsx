import React from 'react'
import Container from 'shared/styled/Container';
import CardPublishedMain from 'shared/components/CardPublishedMain';

// {`https://source.unsplash.com/collection/${Math.floor(Math.random() * 1000)}`}
function NewsPublishedOrdered() {
    return (
        <Container margin="2em 0 0">
            {Array(10).fill(0).map((current, index) => (
                <Container margin="10px 0 0" key={index}>
                    <CardPublishedMain
                    srcImg={`https://source.unsplash.com/collection/${Math.floor(Math.random() * 1000)}`}
                    cardTitle="Jhony Vega | Programmer"
                    cardDetailTitle="hace 10 horas"
                    detailContext={"Lorem ipsum dolor sit, amet consectetur aquam, laborum rerum soluta dicta tempore officiis eveniet, libero magnam expe."}>
                    </CardPublishedMain>
                </Container>
            ))}
        </Container>
    )
}

export default NewsPublishedOrdered;