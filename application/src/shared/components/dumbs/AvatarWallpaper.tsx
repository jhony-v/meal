import React, { ReactNode } from "react";
import { UIAvatar, UIAvatarImage } from "shared/styled/UIAvatar.styled";

function AvatarWallpaper({ image, avatarIcon, ...props }: AvatarWallpaperProps & any) {
	return (
		<UIAvatar {...props}>
			{avatarIcon ? avatarIcon : <UIAvatarImage src={image} {...props} />}
		</UIAvatar>
	);
}

type AvatarWallpaperProps = {
	image?: string;
	avatarIcon?: ReactNode;
} 

AvatarWallpaper.defaultProps = {
	image: "",
};

export default AvatarWallpaper;
