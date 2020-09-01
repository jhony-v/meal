import React from "react";
import { UICard } from "shared/styled/UICard.styled";
import { UIContainer } from "shared/styled/UIContainer.styled";
import { UserModalWrapper } from "./styled";
import UserModalSButtonOpen from "./UserModalSButtonOpen";
import { useCycle, AnimatePresence, } from "framer-motion";
import UserModalSAsyncs from "./Async/UserModalSAsyncs";

const UserModalSettingsContainer = () => {
	const [visible, cycleVisible] = useCycle<boolean>(false,true);
	return (
		<UIContainer position="relative">
			<UserModalSButtonOpen onClick={() => cycleVisible()} />
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

export default UserModalSettingsContainer;
