import React from "react";
import FlatList from "shared/components/dumbs/FlatList";
import UserFollowerItem from "./UserFollowerItem";
import { UITextBoldLarge } from "shared/styled/UIText";

const UserFollowersContainer = () => {
	return (
		<FlatList
			renderHeader={<UITextBoldLarge>Followers</UITextBoldLarge>}
			data={Array(4).fill(0)}
			render={(e, i) => (
				<UserFollowerItem key={i} />
			)}
		/>
	);
};

export default UserFollowersContainer;
