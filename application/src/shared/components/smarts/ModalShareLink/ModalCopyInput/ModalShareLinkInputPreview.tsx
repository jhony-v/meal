import React, { Fragment } from "react";
import { UIText } from "shared/styled/StyledLabels/UIText.styled";
import { UIContainer } from "shared/styled/StyledWrappers/UIContainer.styled";
import ModalCopyLinkButton from "./ModalCopyLinkButton";
import { ModalInputPreviewLink } from "../styled";


const ModalShareLinkInputPreview = ({ linkShare } : any) => {
	return (
		<Fragment>
			<UIContainer mb="1em">
				<UIText weight fontSize="small.2" color="primaryDark">
					Or copy link
				</UIText>
			</UIContainer>
			<ModalInputPreviewLink>
				<input defaultValue={linkShare} spellCheck={false} />
				<ModalCopyLinkButton linkShare={linkShare} />
			</ModalInputPreviewLink>
		</Fragment>
	);
};

export default ModalShareLinkInputPreview;
