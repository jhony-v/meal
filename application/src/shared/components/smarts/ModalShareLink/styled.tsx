import styled from "themes/styled";
import { UIFlexContainer } from "shared/styled/UIFlexContainer.styled";

export const ModalFlexBetween = styled(UIFlexContainer)`
	align-items: center;
	justify-content: space-between;
`;

export const ModalInputPreviewLink = styled.div`
	border-radius: 10px;
	padding: 15px;
	display: flex;
	align-items: center;
	width: 100%;
	border: 1px solid ${(props: any) => props.theme.colors.neutralDarker};
	input {
		width: 100%;
		margin-right: 20px;
		color: ${(props: any) => props.theme.colors.primaryDark};
	}
	> :last-child {
		flex: none;
		color: rgba(230, 60, 90, 0.8);
		cursor: pointer;
	}
`;