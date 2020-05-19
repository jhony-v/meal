import React from 'react'
import CardSimple from 'shared/components/CardSimple';
import Text from 'shared/styled/Text';
import Container from 'shared/styled/Container';
import FlexContainer from 'shared/styled/FlexContainer';
import ThumbnailsChapter from 'shared/components/ThumbnailsChapter';

const Ranking = () => {
    return (
        <CardSimple>
            <Container margin="1em 0">
                <Text weight >Los mas visitados</Text>
            </Container>
            <Container margin="1em">
                <FlexContainer align="center" justify="space-between">
                    {Array(4).fill(0).map((current, index) => (
                        <ThumbnailsChapter
                            key={index}
                            image={`https://source.unsplash.com/collection/${Math.floor(Math.random() * 1000)}`}
                            text="Arroz con pollo"
                        />
                    ))}
                </FlexContainer>
            </Container>
        </CardSimple>
    )
}

export default Ranking;