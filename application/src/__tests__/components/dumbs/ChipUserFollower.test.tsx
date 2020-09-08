import React from "react";
import ChipUserFollower from "shared/components/dumbs/ChipUserFollower";
import { mount } from "enzyme";
import { UIButton } from "shared/styled/UIButton.styled";

describe("ChipUserFollower component", () => {
	it("should have important props ", () => {
		const props = {
			avatar: "image avatar",
			username: "Mark liam",
			description: "description",
		};
		const wrapper = mount(<ChipUserFollower {...props} />);
		expect(wrapper.props()).toEqual(props);
	});

	it("should have button Content the text seguir by default", () => {
		const wrapper = mount(<ChipUserFollower />);
		const containTextDefaultInButton = wrapper.find(UIButton).contains("seguir"); 
		expect(containTextDefaultInButton).toBeTruthy();
	});
});
