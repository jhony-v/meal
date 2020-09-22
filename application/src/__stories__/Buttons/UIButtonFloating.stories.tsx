import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { UIButtonFloating } from "shared/styled/StyledButtons/UIButton.styled";
import StoryComponentProps from "__stories__/@types/StoryComponentProps";
import { ImBell } from "react-icons/im";

export default {
	title: "Buttons/UIButtonFloating",
	component: UIButtonFloating,
} as Meta;

type StoryUIButtonFloatingProps = StoryComponentProps<typeof UIButtonFloating>;

const Template: StoryUIButtonFloatingProps = (args) => (
	<UIButtonFloating {...args}><ImBell/></UIButtonFloating>
);

export const Default: StoryUIButtonFloatingProps = Template.bind({});
