import React, { ReactNode } from "react";
import { UIAvatar, UIAvatarImage } from "shared/styled/UIAvatar";

function AvatarWallpaper({ image, avatarIcon, ...props }: AvatarWallpaperProps) {
	return (
		<UIAvatar {...props}>
			{avatarIcon ? avatarIcon : <UIAvatarImage src={image} {...props} />}
		</UIAvatar>
	);
}

type AvatarWallpaperProps = {
	image?: string;
	avatarIcon?: ReactNode;
} & typeof defaultProps;

const defaultProps = {
	image: "",
};

export default AvatarWallpaper;
