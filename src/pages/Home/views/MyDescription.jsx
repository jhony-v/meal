import React from 'react'
import Button from 'shared/styled/Button'
import Container from 'shared/styled/Container'
import FlexContainer from 'shared/styled/FlexContainer'
import Text from 'shared/styled/Text'
import Smooth from 'shared/styled/Smooth'
import VideoPlayer from 'shared/components/VideoPlayer'

function MyDescription() {
    return (
        <FlexContainer flexDir="column" align="stretch">
            <Container>
                <Container margin="1em 0">
                    <Text weight>My description</Text>
                </Container>
                <Container margin="1em 0">
                <Smooth size={0.8}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam labore, numquam recusandae qui commodi distinctio consequatur deleniti architecto veniam sit praesentium cumque.</Smooth>
                </Container>
            </Container>
            <VideoPlayer src="//player.vimeo.com/external/408416886.hd.mp4?s=33e282afa3e7a14a53213130083de7b7a2327da9&profile_id=174" detailVideo="best food app" />
            <Button>editar</Button>
        </FlexContainer>
    )
}

export default MyDescription

