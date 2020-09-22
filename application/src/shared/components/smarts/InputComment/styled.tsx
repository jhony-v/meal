import styled from "themes/styled";
import { UIFlexContainer } from "shared/styled/StyledWrappers/UIFlexContainer.styled";
import { UICardFlat } from "shared/styled/StyledCards/UICard.styled";

export const ButtonSendFlex = styled(UIFlexContainer)`
	justify-content: space-between;
	align-items: center;
	padding: 0 20px 20px;
`;

export const InputCommentRounded = styled(UICardFlat)`
	width: auto;
	border-radius: 20px;
`;

