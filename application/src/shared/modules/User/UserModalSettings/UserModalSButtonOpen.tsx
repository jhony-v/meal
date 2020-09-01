import React from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { UIAvatar } from "shared/styled/UIAvatar.styled";

export default function UserModalSButtonOpen(props: UserModalSButtonOpenProps) {
	return (
		<UIAvatar css={{ cursor: "pointer" }} bg="rgba(30,130,230,.1)" color="primary" onClick={props.onClick} >
			<AiFillCaretDown size={20} />
		</UIAvatar>
	);
}

type UserModalSButtonOpenProps = {
	onClick: () => void;
};
