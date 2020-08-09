import React from "react";
import { UIFlexContainer } from "shared/styled/UIFlexContainer";
import Drawer from "shared/components/layouts/Drawer";

function Profile() {
	return (
		<Drawer>
			<UIFlexContainer
				sizeHeight="100%"
				justify="space-between"
				padding="2em 1in 0"
			>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi veniam nam accusamus fugit libero, vero aspernatur quis tempore aliquam ipsum iusto doloremque eligendi unde, expedita, assumenda laboriosam ab repellendus ex.
			</UIFlexContainer>
		</Drawer>
	);
}
export default Profile;
