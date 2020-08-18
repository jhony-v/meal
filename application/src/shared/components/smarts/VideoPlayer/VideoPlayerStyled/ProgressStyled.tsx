import styled from "themes/styled";

const Container = styled.div`
	width: 100%;
	margin: 0 10px;
	height: 8px;
	border: 1px solid rgba(255, 255, 255, 0.2);
	border-radius: 10px;
	position: relative;
`;


type ScrollBarProps = {
	percentage ?: number;
	absolute ?: boolean;
	thumb ?: boolean;
}
const Scrollbar = styled.div<ScrollBarProps>`
	height: 100%;
	transition: width 0.5s;
	border-radius: 10px;
	width: ${(props) => props.percentage}%;
	position: ${(props) => props.absolute && "absolute"};
	background-color: ${(props) => props.thumb ? "white" : "rgba(255,255,255,.2)"};
`;

export default  {
	Container,
	Scrollbar,
};
