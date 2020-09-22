import React, { ReactNode } from "react";
import { UIContainer } from "shared/styled/StyledWrappers/UIContainer.styled";
import { UIFlexContainer } from "shared/styled/StyledWrappers/UIFlexContainer.styled";
import { UIAvatarImage } from "shared/styled/StyledAvatars/UIAvatar.styled";
import InputCommentProvider from "./Providers/InputCommentProvider";
import InputCommentTextArea from "./InputCommentTextArea";
import InputCommentButtonSend from "./InputCommentButtonSend";
import { InputCommentRounded } from "./styled";

const InputCommentUser = (props: InputCommentUserProps) => {
	const { children, placeholder, avatar, maxLength, onSendMessage } = props;
	return (
		<InputCommentRounded>
			<InputCommentProvider maxLengthText={maxLength}>
				<UIFlexContainer p="20px">
					<UIAvatarImage src={avatar} />
					<InputCommentTextArea placeholder={placeholder} />
				</UIFlexContainer>
				<InputCommentButtonSend onClick={onSendMessage} />
			</InputCommentProvider>
			{children && <UIContainer p="20px">{children}</UIContainer>}
		</InputCommentRounded>
	);
};

type InputCommentUserProps = {
	placeholder?: string;
	avatar?: string;
	maxLength?: number;
	onSendMessage: <T>(e: T) => void;
	children?: ReactNode;
};

InputCommentUser.defaultProps = {
	placeholder: "What's on your mind, Friend ?",
	avatar: "",
	onSendMessage: (): any => null,
	children: null,
};

export default InputCommentUser;
