import React from "react";
import UserModalSButtonNavigate from "./UserModalSButtonNavigate";
import { IoIosSettings } from "react-icons/io";
import { ImContrast } from "react-icons/im";
import { RiLogoutBoxFill } from "react-icons/ri";

export default function UserModalSettingsContentCard() {
	return (
		<div>
			<UserModalSButtonNavigate
				text="Configurar mi cuenta"
				icon={IoIosSettings}
			/>
			<UserModalSButtonNavigate text="Cambiar tema" icon={ImContrast} />
			<UserModalSButtonNavigate text="Logout" icon={RiLogoutBoxFill} />
		</div>
	);
}
