import React from 'react'
import Container from 'shared/styled/Container';
import CardPublishedMain from 'shared/components/CardPublishedMain';
import VideoPlayer from 'shared/components/VideoPlayer';

function NewsFeedOrdered() {
    return (
        <Container margin="2em 0 0">
            {Array(2).fill(0).map((current, index) => (
                <Container margin="10px 0 0" key={index}>
                    <CardPublishedMain
                        srcImg={`https://source.unsplash.com/collection/${Math.floor(Math.random() * 1000)}`}
                        cardTitle="Jhony Vega | Programmer"
                        cardDetailTitle="hace 10 horas"
                        detailContext={"Lorem ipsum dolor sit, amet consectetur aquam, laborum rerum soluta dicta tempore officiis eveniet, libero magnam expe."}>
                        <Container margin="1em 0">
                            <VideoPlayer src="//player.vimeo.com/external/408416886.hd.mp4?s=33e282afa3e7a14a53213130083de7b7a2327da9&profile_id=174" detailVideo="best food app" />
                        </Container>
                    </CardPublishedMain>
                </Container>
            ))}
        </Container>
    )
}

export default NewsFeedOrdered;