import React from "react";
import { UIFlexContainer } from "shared/styled/UIFlexContainer";
import { UIText } from "shared/styled/UIText";
import { UIAvatar } from "shared/styled/UIAvatar";
import { IoIosClose } from "react-icons/io";

const ModalShareLinkHeader = ({ onClick }) => {
	return (
		<UIFlexContainer alignItems="center" justifyContent="space-between">
			<UIText weight variant="dark" fontSize="normal.2">Share this link</UIText>
			<UIAvatar bg="neutralLight" color="gray" onClick={onClick}>
				<IoIosClose size={30} />
			</UIAvatar>
		</UIFlexContainer>
	);
};

export default ModalShareLinkHeader;
