import React from "react";
import Drawer from "shared/components/layouts/Drawer";
import { UIGrid } from "shared/styled/StyledWrappers/UIGrid.styled";

export default function SettingProfile() {
	return (
		<Drawer isDrawer>
			<UIGrid gridTemplateColumns="400px 1fr">
			</UIGrid>
		</Drawer>
	);
}
