import styled from "themes/styled";
import { motion } from "framer-motion";

export const DropdownListMainWrapper = styled(motion.div)`
	background-color: rgba(100, 100, 100, 0.04);
	border-radius: 10px;
	overflow: hidden;
`;

export const DropdownListItemWrapper = styled(motion.div)`
	border-bottom: 2px solid white;
	padding: 15px;
`;

export const DropdownListItemHeaderWrapper = styled.div`
	cursor: pointer;
	display: flex;
	justify-content: space-between;
	font-size : 13px;
`;

export const DropdownListItemBodyWrapper = styled(motion.div)``;
