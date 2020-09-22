import React from "react";
import { UIFlexContainer } from "shared/styled/StyledWrappers/UIFlexContainer.styled";
import { UIContainer } from "shared/styled/StyledWrappers/UIContainer.styled";
import { UIAvatar } from "shared/styled/StyledAvatars/UIAvatar.styled";
import { IoIosPaperPlane } from "react-icons/io";
import { UIButton } from "shared/styled/StyledButtons/UIButton.styled";

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
