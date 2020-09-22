import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { UIAvatarImage, UIAvatarFeaturedPrimary } from "shared/styled/StyledAvatars/UIAvatar.styled";
import StoryComponentProps from "__stories__/@types/StoryComponentProps";

export default {
	title: "Avatar Images/UIImage",
	component: UIAvatarImage,
	args : {
		src : "https://www.themandarin.com.au/wp-content/uploads/2020/07/space-astronaut.jpg"
	},
	argTypes: {
		src: {
			control: {
				type: "text",
			},
		},
		size: {
			control: {
				type: "number",
			},
		},
	},
} as Meta;

type StoryUIAvatarImageProps = StoryComponentProps<typeof UIAvatarImage>;
const Template: StoryUIAvatarImageProps = (args) => <UIAvatarImage {...args} />;

export const Default: StoryUIAvatarImageProps = Template.bind({});
Default.argTypes = {
	borderRadius: {
		control: {
			type: "number",
			min: 0,
			max: 100,
		},
	},
	width: {
		control: {
			type: "text",
		},
	},
	height: {
		control: {
			type: "text",
		},
	},
}

export const FeaturedPrimary: StoryUIAvatarImageProps = Template.bind({});
FeaturedPrimary.decorators = [
	(Story) => (
		<UIAvatarFeaturedPrimary>
			<Story />
		</UIAvatarFeaturedPrimary>
	),
];
