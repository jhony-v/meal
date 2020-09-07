import React from "react";
import { UICard } from "shared/styled/UICard.styled";
import { UIContainer } from "shared/styled/UIContainer.styled";
import { UserModalWrapper } from "./styled";
import UserModalSettingsButtonOpen from "./UserModalSettingsComponents/UserModalSettingsButtonOpen";
import { useCycle, AnimatePresence, } from "framer-motion";
import UserModalSAsyncs from "./Async/UserModalSAsyncs";

const UserModalSettings = () => {
	const [visible, cycleVisible] = useCycle<boolean>(false,true);
	return (
		<UIContainer position="relative">
			<UserModalSettingsButtonOpen onClick={() => cycleVisible()} />
			<AnimatePresence>
				{visible && (
					<UserModalWrapper onHoverEnd={()=>cycleVisible()} >
						<UICard boxShadow="medium">
							<UserModalSAsyncs.Card/>
						</UICard>
					</UserModalWrapper>
				)}
			</AnimatePresence>
		</UIContainer>
	);
};

export default UserModalSettings;
