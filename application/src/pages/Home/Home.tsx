import React from "react";
import scss from "./Home.module.scss";
import { UIFlexContainer } from "shared/styled/UIFlexContainer.styled";
import Drawer from "shared/components/layouts/Drawer";
import HomeTrendsContainer from "./HomeTrends/HomeTrendsContainer";
import HomeWrapperAddPostContainer from "./HomeWrapperAddPost/HomeWrapperAddPostContainer";
import UserFollowersContainer from "shared/modules/User/UserFollowers/UserFollowersContainer";
import { UIContainer } from "shared/styled/UIContainer.styled";
import NewsFeedContainer from "shared/modules/Publication/NewsFeed/NewsFeedContainer";
import { UIButton } from "shared/styled/UIButton.styled";
import DropDown from "shared/components/smarts/DropdownList/DropdownList";

export default function Home() {
	return (
		<Drawer isDrawer>
			<UIFlexContainer justifyContent="space-between" p="2em 1in 0">
				<HomeTrendsContainer />
				<UIContainer className={scss.feeds}>
					<DropDown>
						<DropDown.Item header={<p>Profile</p>}>
							<UIButton variant="primary">hola</UIButton>
						</DropDown.Item>
						<DropDown.Item header={<p>Settings</p>}>
						<UIButton variant="primary">hola</UIButton>
						</DropDown.Item>
						<DropDown.Item header={<p>Buttons</p>}>
						<UIButton variant="primary">hola</UIButton>
						</DropDown.Item>
					</DropDown>
					<HomeWrapperAddPostContainer />
					<NewsFeedContainer />
				</UIContainer>
				<UserFollowersContainer />
			</UIFlexContainer>
		</Drawer>
	);
}
