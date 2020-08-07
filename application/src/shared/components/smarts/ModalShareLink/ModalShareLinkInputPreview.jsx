import React, { Fragment } from "react";
import styled from "@emotion/styled";
import { UIText } from "shared/styled/UIText";
import { UIContainer } from "shared/styled/UIContainer";

const UIModalInputPreviewLink = styled.div`
	border-radius: 10px;
	border: 1px solid rgba(0, 0, 0, 0.08);
	padding: 15px;
	display: flex;
	align-items: center;
	width: 100%;
	input {
		width: 100%;
		margin-right: 20px;
	}
	> :last-child {
		flex: none;
		color: ${(props) => props.colorTextCopy};
		cursor: pointer;
	}
`;

const ModalShareLinkInputPreview = ({ linkShare }) => {
	return (
		<Fragment>
			<UIContainer marginBottom="1em">
				<UIText weight size="small">
					Or copy link
				</UIText>
			</UIContainer>
			<UIModalInputPreviewLink colorTextCopy="rgba(230,60,90,.8)">
				<input defaultValue={linkShare} spellCheck={false} />
				<UIText size="small" weight>
					Copy
				</UIText>
			</UIModalInputPreviewLink>
		</Fragment>
	);
};

export default ModalShareLinkInputPreview;
