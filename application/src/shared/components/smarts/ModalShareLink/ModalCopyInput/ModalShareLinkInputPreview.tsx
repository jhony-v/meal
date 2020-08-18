import React, { Fragment } from "react";
import styled from "@emotion/styled";
import { UIText } from "shared/styled/UIText.styled";
import { UIContainer } from "shared/styled/UIContainer.styled";
import ModalCopyLinkButton from "./ModalCopyLinkButton";

const UIModalInputPreviewLink = styled.div`
	border-radius: 10px;
	padding: 15px;
	display: flex;
	align-items: center;
	width: 100%;
	border: 1px solid ${(props:any)=>props.theme.colors.neutralDarker};
	input {
		width: 100%;
		margin-right: 20px;
		color : ${(props:any)=>props.theme.colors.primaryDark};
	}
	> :last-child {
		flex: none;
		color: rgba(230,60,90,.8);
		cursor: pointer;
	}
`;

const ModalShareLinkInputPreview = ({ linkShare } : any) => {
	return (
		<Fragment>
			<UIContainer mb="1em">
				<UIText weight fontSize="small.2" color="primaryDark">
					Or copy link
				</UIText>
			</UIContainer>
			<UIModalInputPreviewLink>
				<input defaultValue={linkShare} spellCheck={false} />
				<ModalCopyLinkButton linkShare={linkShare} />
			</UIModalInputPreviewLink>
		</Fragment>
	);
};

export default ModalShareLinkInputPreview;
