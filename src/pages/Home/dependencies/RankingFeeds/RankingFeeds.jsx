import React from 'react'
import CardSimple from 'shared/components/dumbs/CardSimple';
import UIText from 'shared/styled/UIText';
import UIContainer from 'shared/styled/UIContainer';
import ThumbnailsChapter from 'shared/components/dumbs/ThumbnailsChapter';
import UIScrollBarList from 'shared/styled/UIScrollBarList';

function RankingFeeds(){
    return (
        <CardSimple>
            <UIContainer margin="1em 0">
                <UIText weight >Los mas visitados</UIText>
            </UIContainer>
            <UIContainer margin="1em">
                <UIScrollBarList >
                    {Array(20).fill(0).map((current, index) => (
                        <UIContainer margin="0 1em">
                            <ThumbnailsChapter
                                key={index}
                                image={`https://source.unsplash.com/collection/${Math.floor(Math.random() * 1000)}`}
                                text="Arroz con pollo"
                                isOutstanding
                            />
                        </UIContainer>
                    ))}
                </UIScrollBarList>
            </UIContainer>
        </CardSimple>
    )
}

export default RankingFeeds;