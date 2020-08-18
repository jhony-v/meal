import React, { memo } from "react";
import { UICard } from "shared/styled/UICard.styled";

function CardSimple({ children, ...props }: CardSimpleProps) {
	return <UICard {...props}>{children}</UICard>;
}

type CardSimpleProps = {
	children: React.ReactNode;
};

export default memo(CardSimple);
