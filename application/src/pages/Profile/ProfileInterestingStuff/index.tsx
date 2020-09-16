import React from "react";
import { UIContainer } from "shared/styled/UIContainer.styled";
import VideoPlayer from "shared/components/smarts/VideoPlayer";
import ProfileInterestingFoodsContainer from "./ProfileInterestingFoods/ProfileInterestingFoodsContainer";

const ProfileInterestingStuff = () => {
	return (
		<UIContainer>
			<ProfileInterestingFoodsContainer/>
			<VideoPlayer src="https://player.vimeo.com/external/402679728.hd.mp4?s=d24e05f20b7e859ad5bc7adc30c707e689c01078&profile_id=174" />
		</UIContainer>
	);
};

export default ProfileInterestingStuff;
