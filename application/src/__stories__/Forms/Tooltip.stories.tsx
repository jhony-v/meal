import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import AnimatableTooltip from "shared/components/smarts/AnimatableTooltip";
import { UIButton } from "shared/styled/StyledButtons/UIButton.styled";
import StoryComponentProps from "__stories__/@types/StoryComponentProps";

export default {
	title: "Forms/AnimatableTooltip",
	component: AnimatableTooltip,
	args : {
		tooltipMessage : {
			content : "Hello world from Tooltip"
		}
	}
} as Meta;

type StoryAnimatableTooltipProps = StoryComponentProps<typeof AnimatableTooltip>;
const Template: StoryAnimatableTooltipProps = (args) => (
	<AnimatableTooltip {...args}>
		<UIButton variant="primary">Jose Angel Torres</UIButton>
	</AnimatableTooltip>
);

export const Default : StoryAnimatableTooltipProps = Template.bind({});
export const Light : StoryAnimatableTooltipProps = Template.bind({});
Light.args = {
	 tooltipMessage : {
		 variant  : "light"
	 }
}
