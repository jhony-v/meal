import styled from "@emotion/styled";

const Container = styled.div`
	width: 100%;
	margin: 0 10px;
	height: 8px;
	border: 1px solid rgba(255, 255, 255, 0.2);
	border-radius: 10px;
	position: relative;
`;

const Scrollbar = styled.div`
	height: 100%;
	transition: width 0.5s;
	border-radius: 10px;
	width: ${(props : any) => props.percentage}%;
	position: ${(props : any) => props.absolute && "absolute"};
	background-color: ${(props : any) => props.thumb ? "white" : "rgba(255,255,255,.2)"};
`;

export default  {
	Container,
	Scrollbar,
};
