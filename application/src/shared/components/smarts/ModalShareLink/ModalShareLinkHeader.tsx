import React from "react";
import { UIFlexContainer } from "shared/styled/StyledWrappers/UIFlexContainer.styled";
import { UIText } from "shared/styled/StyledLabels/UIText.styled";
import { UIAvatar } from "shared/styled/StyledAvatars/UIAvatar.styled";
import { IoIosClose } from "react-icons/io";

const ModalShareLinkHeader = ({ onClick }: any) => {
	return (
		<UIFlexContainer alignItems="center" justifyContent="space-between">
			<UIText weight color="primaryDark" fontSize="normal.2">Share this link</UIText>
			<UIAvatar bg="neutralLight" color="gray" onClick={onClick}>
				<IoIosClose size={30} />
			</UIAvatar>
		</UIFlexContainer>
	);
};

export default ModalShareLinkHeader;
