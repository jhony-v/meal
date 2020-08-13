import React from "react";
import { UIFlexContainer } from "shared/styled/UIFlexContainer";
import { UIText } from "shared/styled/UIText";
import styled from "@emotion/styled";
import dayjs from "dayjs";
import { useVideoPlayerContext } from "../Providers/VideoPlayerProvider";

export default () => {
	const { currentTime, duration , percentage , bufferPercentage } = useVideoPlayerContext();
	return(
		<UIFlexContainer width="100%" mx="10px" justifyContent="space-between" alignItems="center">
		<UIText color="primaryLight" fontSize="small.1">{timerVideo(currentTime)}</UIText>
		<ScrollbarProgressContainer>
			<ScrollbarProgress absolute percentage={bufferPercentage} />
			<ScrollbarProgress percentage={percentage} thumb />
		</ScrollbarProgressContainer>
		<UIText color="primaryLight" fontSize="small.1">{timerVideo(duration)}</UIText>
		</UIFlexContainer>
	)
};

// format the time
const timerVideo = (value) =>  dayjs().startOf("day").second(value).format("mm:ss");

// styled components personal
const ScrollbarProgressContainer = styled.div`
	width : 100%;
	margin:0 10px;
	height:8px;
	border : 1px solid rgba(255,255,255,.2);
	border-radius : 10px;
	position:relative;
` 
const ScrollbarProgress = styled.div`
	height : 100%;
	transition : width .5s;
	border-radius : 10px;
	width : ${props => props.percentage}%;
	position : ${props => props.absolute && 'absolute' };
	background-color : ${props => props.thumb ? 'white' : 'rgba(255,255,255,.2)'};
`
