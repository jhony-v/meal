import React from "react";
import ChipUserFollower from "shared/components/dumbs/ChipUserFollower";

const UserFollowerItem = () => {
	return (
		<ChipUserFollower
			avatar="https://cdn.pixabay.com/photo/2017/03/17/04/07/beautiful-2150881__340.jpg"
			username="Mark zuckerberg"
			description="@CEO in facebook"
			buttonContent="Follow"
			p="18px 0"
		/>
	);
};

export default UserFollowerItem;
