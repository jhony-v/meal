import { motion } from "framer-motion";
import { UIAvatarImage } from "shared/styled/UIAvatar.styled";
import styled from "themes/styled";

type ContainerBackgroundProps = {
	image: string;
};
export const ContainerBackground = styled(motion.div)<ContainerBackgroundProps>`
	background: linear-gradient(45deg, rgba(0, 0, 0, 0.4), transparent),url(${(props) => props.image}) no-repeat center / cover;
	cursor: pointer;
	border-radius: 20px;
	display: inline-block;
	height: 250px;
	width: 100%;
	padding: 16px;
	transition:transform .1s;
	&:hover {
		transform: scale(.98);
	}
	> * {
		height:100%;
	}
`;

export const HistoryUserCard = {
	Avatar: styled(UIAvatarImage)`
		border: 2px solid white;
	`,
	Text : styled("span")`
		font-size: ${({theme}) => theme.fontSizes.small[0]};
		margin-top: auto;
		color: white;
		user-select:none;
	`
};
