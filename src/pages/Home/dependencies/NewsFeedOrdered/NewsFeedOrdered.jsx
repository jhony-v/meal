import React from 'react'
import UIContainer from 'shared/styled/UIContainer';
import FeedCardPulished from 'shared/components/smarts/FeedCardPublished';

function NewsFeedOrdered() {
    return (
        <UIContainer margin="2em 0 0">
            {Array(2).fill(0).map((current, index) => (
                <FeedCardPulished
                    index={index}
                    avatarImage={`https://source.unsplash.com/collection/${Math.floor(Math.random() * 1000)}`}
                    avatarTitle="Jhony Vega"
                    avatarDetail="publicado hace 10 dias"
                    detail="Lorem ipsum dolor sit, amet consectetur aqum soluta dicta tempore officiis eveniet, libero magnam expe."
                    detailVideo="food app new"
                    video="//player.vimeo.com/external/408416886.hd.mp4?s=33e282afa3e7a14a53213130083de7b7a2327da9&profile_id=174" />
            ))}
        </UIContainer>
    )
}

export default NewsFeedOrdered;