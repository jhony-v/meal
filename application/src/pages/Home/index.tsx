import React from "react";
import scss from "./Home.module.scss";
import { UIFlexContainer } from "shared/styled/StyledWrappers/UIFlexContainer.styled";
import Drawer from "shared/components/layouts/Drawer";
import HomeTrends from "./HomeTrends";
import HomeWrapperAddPost from "./HomeWrapperAddPost";
import UserFollowers from "shared/packages/User/UserFollowers/UserFollowers";
import { UIContainer } from "shared/styled/StyledWrappers/UIContainer.styled";
import NewsFeedContainer from "shared/packages/Publication/NewsFeed/NewsFeedContainer";

export default function Home() {
	return (
		<Drawer isDrawer>
			<UIFlexContainer justifyContent="space-between" p="2em 1in 0">
				<HomeTrends />
				<UIContainer className={scss.feeds}>
					<HomeWrapperAddPost />
					<NewsFeedContainer />
				</UIContainer>
				<UserFollowers />
			</UIFlexContainer>
		</Drawer>
	);
}
