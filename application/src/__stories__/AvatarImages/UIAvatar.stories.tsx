import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import StoryComponentProps from "__stories__/@types/StoryComponentProps";
import { UIAvatar } from "shared/styled/StyledAvatars/UIAvatar.styled";
import { IoIosAlbums } from "react-icons/io";

export default {
	title: "Avatar Images/UIAvatar",
	component: UIAvatar,
	argTypes: {
		size: {
			control: {
				type: "number",
			},
		},
		bg : {
			control: {
				type : "color"
			}
		},
		color : {
			control: {
				type : "color"
			}
		},
	},
} as Meta;

type StoryUIAvatarProps = StoryComponentProps<typeof UIAvatar>;
const Template: StoryUIAvatarProps = (args) => <UIAvatar {...args} ><IoIosAlbums size={25} /></UIAvatar>;

export const Default: StoryUIAvatarProps = Template.bind({});
Default.args = {
	bg : "neutralLight",
	color : "neutral"
}

