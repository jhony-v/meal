import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { UIButton } from "shared/styled/UIButton.styled";
import StoryComponentProps from "__stories__/@types/StoryComponentProps";

export default {
	title: "Buttons/UIButton",
	component: UIButton,
} as Meta;

type StoryUIButtonProps = StoryComponentProps<typeof UIButton>;
const Template: StoryUIButtonProps = (args) => (
	<UIButton {...args}>ui button</UIButton>
);

export const Default: StoryUIButtonProps = Template.bind({});
Default.args = {
	variant: "default",
};

export const Primary: StoryUIButtonProps = Template.bind({});
Primary.args = {
	variant: "primary",
};

export const Outline: StoryUIButtonProps = Template.bind({});
Outline.args = {
	variant: "outline",
};
