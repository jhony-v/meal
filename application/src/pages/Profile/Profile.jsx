import React from "react";
import Drawer from "shared/components/layouts/Drawer";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import { UIContainer } from "shared/styled/UIContainer";

export default function Profile() {
	return (
		<Drawer isMainContainerLayout>
			<UIContainer
				height="100%"
				p="2em 1in 0"
			>
				<ProfileHeader />
			</UIContainer>
		</Drawer>
	);
}
