import React from 'react'
import { UIContainer } from 'shared/styled/UIContainer';
import CardPublishedMain from 'shared/components/dumbs/CardPublishedMain';
import VideoPlayer from 'shared/components/smarts/VideoPlayer';
import FeedCardHeader from './dependencies/FeedCardHeader';

const FeedCardPublished = ({ avatarImage, avatarTitle, avatarDetail, detail, video, detailVideo }) => {
    return (
        <UIContainer margin="10px 0 0">
            <CardPublishedMain
                publishedHeader={
                    <FeedCardHeader
                        image={avatarImage}
                        title={avatarTitle}
                        detail={avatarDetail} />
                }
                detailContext={detail}>
                <UIContainer margin="1em 0">
                    {video && (
                        <VideoPlayer src={video} detailVideo={detailVideo} />
                    )}
                </UIContainer>
            </CardPublishedMain>
        </UIContainer>)
}

export default FeedCardPublished;