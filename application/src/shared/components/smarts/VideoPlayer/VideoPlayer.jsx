import { UIContainer } from "shared/styled/UIContainer";
import { jsx } from "@emotion/core";
import { UIFlexContainer } from "shared/styled/UIFlexContainer";
import { IoIosVolumeHigh, IoIosSettings, IoIosAperture, IoIosPlayCircle } from "react-icons/io";
import { UIText } from "shared/styled/UIText";
/** @jsx jsx */

const VideoPlayer = () => {
	return (
		<UIContainer css={{overflow:"hidden",borderRadius:"10px"}} position="relative">
			<video
				width="100%"
				preload="true"
				css={{
					objectFit : "cover",
					display : "block"
				}}
				src="https://player.vimeo.com/external/399913636.hd.mp4?s=ec8c3bcf6597f7f5cfe3098d5edddb5ecd28c179&profile_id=174"
			/>
					<IoIosPlayCircle color="white" size={50} css={{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%,-50%)"}} />
			<UIContainer padding="1em" css={{background:"rgba(0,0,0,.4)"}} position="absolute" bottom="0" left="0" sizeWidth="100%">
					<UIFlexContainer align="center" justify="space-between">
							<IoIosVolumeHigh color="white" size={20} />
							<UIFlexContainer sizeWidth="100%" marginHorizontal="10px" justify="space-between">
								<UIText variant="light" size="small2">00:00</UIText>
								<UIText variant="light" size="small2">13:75</UIText>
							</UIFlexContainer>
							<IoIosAperture color="white" size={20} />
							<IoIosSettings color="white" size={20} />
					</UIFlexContainer>
			</UIContainer>
		</UIContainer>
	);
};

export default VideoPlayer;
