import React from "react";
import ProfileWrapperBackdropUsername from "./ProfileUserBasic/ProfileWrapperBackdropUsername";
import ProfileWrapperUsername from "./ProfileUserBasic/ProfileWrapperUsername";

const image =	"https://wallpapercave.com/wp/wp2041832.jpg";

const ProfileHeader = () => {
	return (
		<ProfileWrapperBackdropUsername image={image}>
			<ProfileWrapperUsername />
		</ProfileWrapperBackdropUsername>
	);
};
export default ProfileHeader;
