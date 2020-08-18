import React, { useState } from "react";
import { UIText } from "shared/styled/UIText.styled";

export default ({ linkShare }: any) => {
	const [shared, setShared] = useState(false);
	const onCopyText = () => {
		window.navigator.clipboard.writeText(linkShare).then(() => {
			setShared(true);
			alert("Link copiado");
		});
	};
	return <UIText fontSize="small.2" weight onClick={onCopyText}>Copy</UIText>
};