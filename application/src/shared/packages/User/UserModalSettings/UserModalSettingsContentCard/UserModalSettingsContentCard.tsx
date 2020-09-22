import React from "react";
import UserModalSettingsButtonNavigate from "../UserModalSettingsComponents/UserModalSettingsButtonNavigate";
import { IoIosSettings, IoIosPerson } from "react-icons/io";
import { ImContrast } from "react-icons/im";
import { RiLogoutBoxFill } from "react-icons/ri";
import UserModalSPreviewUserInformation from "./UserModalSPreviewUserInformation";

export default function UserModalSettingsContentCard() {
	return (
		<>
			<UserModalSPreviewUserInformation/>
			<UserModalSettingsButtonNavigate to="/settings" text="Administrar mi perfil" icon={IoIosPerson} />
			<UserModalSettingsButtonNavigate to="/settings/account" text="Configurar mi cuenta" icon={IoIosSettings} />
			<UserModalSettingsButtonNavigate to="/settings/theme" text="Cambiar tema" icon={ImContrast} />
			<UserModalSettingsButtonNavigate to="/" text="Cerrar sesión" icon={RiLogoutBoxFill} />
		</>
	);
}
