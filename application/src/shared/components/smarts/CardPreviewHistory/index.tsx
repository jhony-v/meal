import React from "react";
import { UIContainer } from "shared/styled/UIContainer.styled";
import CardPreviewHistoryBackground, { CardBackgroundImageProps } from "./CardPreviewHistoryBackground";
import { HistoryUserCard } from "./styled";

const CardPreviewHistory = (props: CardPreviewHistoryProps) => {
	const { onClick, image, user } = props;
	return (
		<UIContainer onClick={onClick}>
			<CardPreviewHistoryBackground image={image}>
				<HistoryUserCard.Avatar src={user.avatar} />
				<HistoryUserCard.Text>{user.fullName}</HistoryUserCard.Text>
			</CardPreviewHistoryBackground>
		</UIContainer>
	);
};

type CardPreviewHistoryProps = CardBackgroundImageProps & {
	user?: User;
	onClick?: () => void;
};

interface User {
	fullName?: string;
	avatar?: string;
}

export default CardPreviewHistory;
