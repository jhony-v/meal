import React, { Fragment } from "react";
import ProfileDetailsDescription from "./ProfileDependencies/ProfileDetailsDescription";
import ProfileDetailsTypeLikes from "./ProfileDependencies/ProfileDetailsTypeLikes";

const ProfileUserDescription = () => {
	return (
		<Fragment>
			<ProfileDetailsDescription />
			<ProfileDetailsTypeLikes />
		</Fragment>
	);
};

export default ProfileUserDescription;
