import React from "react";
import UserModalSButtonNavigate from "./UserModalSButtonNavigate";
import { IoIosSettings, IoIosPerson } from "react-icons/io";
import { ImContrast } from "react-icons/im";
import { RiLogoutBoxFill } from "react-icons/ri";
import UserModalSPreviewUserInformation from "./UserModalSPreviewUserInformation";

export default function UserModalSettingsContentCard() {
	return (
		<>
			<UserModalSPreviewUserInformation/>
			<UserModalSButtonNavigate to="/" text="Configurar mi cuenta" icon={IoIosSettings} />
			<UserModalSButtonNavigate to="/" text="Administrar mi perfil" icon={IoIosPerson} />
			<UserModalSButtonNavigate to="/" text="Cambiar tema" icon={ImContrast} />
			<UserModalSButtonNavigate to="/" text="Cerrar sesión" icon={RiLogoutBoxFill} />
		</>
	);
}
