import React from "react";
import { UIFlexContainer } from "shared/styled/UIFlexContainer";
import { UIText } from "shared/styled/UIText";
import { UIAvatar } from "shared/styled/UIAvatar";
import { IoIosClose } from "react-icons/io";
import { useTheme } from "emotion-theming";

const ModalShareLinkHeader = ({ onClick }) => {
	const { colors } = useTheme();
	return (
		<UIFlexContainer align="center" justify="space-between">
			<UIText weight variant="dark">Share this link</UIText>
			<UIAvatar background={colors.grayDarkBorder} colorAvatar="gray" onClick={onClick}>
				<IoIosClose size={30} />
			</UIAvatar>
		</UIFlexContainer>
	);
};

export default ModalShareLinkHeader;
