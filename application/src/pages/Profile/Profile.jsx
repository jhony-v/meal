import React from "react";
import Drawer from "shared/components/layouts/Drawer";
import { UIContainer } from "shared/styled/UIContainer";
import { UIGrid } from "shared/styled/UIGrid";
import ProfilePreviewModules from "./ProfilePreview/ProfilePreviewModules";
import ProfileAside from "./ProfileAside/ProfileAside";
import ProfileInterestingStuff from "./ProfileInterestingStuff/ProfileInterestingStuff";

export default function Profile() {
	return (
		<Drawer isMainContainerLayout>
			<UIContainer p="2em 1in 0">
				<UIGrid gridTemplateColumns="360px 1fr 260px" gridGap={20}>
					<ProfileAside />
					<ProfilePreviewModules />
					<ProfileInterestingStuff />
				</UIGrid>
			</UIContainer>
		</Drawer>
	);
}
