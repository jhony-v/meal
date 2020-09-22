import React from "react";
import Drawer from "shared/components/layouts/Drawer";
import { UIContainer } from "shared/styled/StyledWrappers/UIContainer.styled";
import { UIGrid } from "shared/styled/StyledWrappers/UIGrid.styled";
import ProfileAside from "./ProfileAside";
import ProfileInterestingStuff from "./ProfileInterestingStuff";
import ProfileModules from "./ProfileModules";

export default function Profile() {
	return (
		<Drawer isDrawer>
			<UIContainer p="2em 1in 0">
				<UIGrid gridTemplateColumns="360px 1fr 320px" gridGap={20}>
					<ProfileAside />
					<ProfileModules/>
					<ProfileInterestingStuff />
				</UIGrid>
			</UIContainer>
		</Drawer>
	);
}
