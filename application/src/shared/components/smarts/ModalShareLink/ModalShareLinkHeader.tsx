import React from "react";
import { UIFlexContainer } from "shared/styled/UIFlexContainer.styled";
import { UIText } from "shared/styled/UIText.styled";
import { UIAvatar } from "shared/styled/UIAvatar.styled";
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
