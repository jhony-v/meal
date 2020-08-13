import React from "react";
import { UIFlexContainer } from "shared/styled/UIFlexContainer";
import { UIContainer } from "shared/styled/UIContainer";
import { UIAvatar } from "shared/styled/UIAvatar";
import { IoIosPaperPlane } from "react-icons/io";
import { UIButton } from "shared/styled/UIButton";

const ProfileActionConnectSimple = () => {
	return (
		<UIFlexContainer alignItems="center" pt={4}>
			<UIContainer flex="none" mr={15}>
				<UIAvatar bg="primary" color="primaryLight">
					<IoIosPaperPlane />
				</UIAvatar>
			</UIContainer>
			<UIButton variant="outline" block>
				CONNECT
			</UIButton>
		</UIFlexContainer>
	);
};

export default ProfileActionConnectSimple;
