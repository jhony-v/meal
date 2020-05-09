import React from 'react'
import CardSimple from 'shared/components/CardSimple';
import Text from 'shared/styled/Text';
import Container from 'shared/styled/Container';
import FlexContainer from 'shared/styled/FlexContainer';
import ThumbnailsInRanking from '../components/ThumbnailsInRanking';

const Ranking = () => {
    return (
        <CardSimple>
            <Container margin="1em 0">
                <Text weight >Los mas visitados</Text>
            </Container>
            <Container margin="1em">
                <FlexContainer align="center" justify="space-between">
                    {Array(4).fill(0).map((current, index) => (
                        <ThumbnailsInRanking 
                        key={index}
                        img={`https://source.unsplash.com/collection/${Math.floor(Math.random() * 1000)}`}
                        text={"Aji de gallina"} />        
                    ))}
                </FlexContainer>
            </Container>
        </CardSimple>
    )
}

export default Ranking;