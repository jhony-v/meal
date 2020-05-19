import React from 'react'
import CardSimple from 'shared/components/CardSimple';
import Text from 'shared/styled/Text';
import Container from 'shared/styled/Container';
import ThumbnailsChapter from 'shared/components/ThumbnailsChapter';
import ScrollBarList from 'shared/styled/ScrollBarList';

const Ranking = () => {
    return (
        <CardSimple>
            <Container margin="1em 0">
                <Text weight >Los mas visitados</Text>
            </Container>
            <Container margin="1em">
                        <ScrollBarList>
                            {Array(20).fill(0).map((current, index) => (
                                <Container margin="0 1em">
                                    <ThumbnailsChapter
                                        key={index}
                                        image={`https://source.unsplash.com/collection/${Math.floor(Math.random() * 1000)}`}
                                        text="Arroz con pollo"
                                        isOutstanding
                                    />
                                </Container>
                            ))}
                        </ScrollBarList>
            </Container>
        </CardSimple>
    )
}

export default Ranking;