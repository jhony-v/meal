import React, { memo } from "react";
import { UIAvatarImage } from "shared/styled/UIAvatar.styled";

function IconApplication() {
	return (
		<UIAvatarImage size={40} src="https://cdn2.iconfinder.com/data/icons/minimalism/512/twitter.png" />
	);
}

export default memo(IconApplication);
