import React from "react";
import ProfileWrapperBackdropUsername from "./ProfileUserBasic/ProfileWrapperBackdropUsername";
import ProfileWrapperUsername from "./ProfileUserBasic/ProfileWrapperUsername";

const image =	"https://cdn.pixabay.com/photo/2020/07/19/09/55/man-5419522__340.jpg";

const ProfileHeader = () => {
	return (
		<ProfileWrapperBackdropUsername image={image}>
			<ProfileWrapperUsername />
		</ProfileWrapperBackdropUsername>
	);
};
export default ProfileHeader;
