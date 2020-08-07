import React from "react";
import { UIFlexContainer } from "shared/styled/UIFlexContainer";
import { UIText } from "shared/styled/UIText";
import { UIAvatar } from "shared/styled/UIAvatar";
import { IoIosClose } from "react-icons/io";

const ModalShareLinkHeader = ({ onClick }) => {
	return (
		<UIFlexContainer align="center" justify="space-between">
			<UIText weight>Share this link</UIText>
			<UIAvatar background="rgba(0,0,0,.05)" color="gray" onClick={onClick}>
				<IoIosClose size={30} />
			</UIAvatar>
		</UIFlexContainer>
	);
};

export default ModalShareLinkHeader;
