import React from "react";
import { shallow, mount } from "enzyme";
import PrimaryCommentEntry from "shared/components/dumbs/PrimaryCommentEntry";

describe("PrimaryCommentEntry component", () => {
	it("should receive placeholder", () => {
		const props = {
			onClick: () => {},
			onKeyUp: () => {},
			placeholder: "Write a text",
		};
		const wrapper = shallow(<PrimaryCommentEntry {...props} />);
		const searchPlaceholder = wrapper.find("[placeholder]").props().placeholder;
		const expectValuePlaceholder = "Write a text";
		expect(searchPlaceholder).toBe(expectValuePlaceholder);
	});

	test('should Execute events', () => {
		const props = {
			onClick: () => console.log("run onClick"),
			onKeyUp: () => console.log("run onKeyUp"),
		};
		const wrapper = mount(<PrimaryCommentEntry {...props} />);
		expect(wrapper.props().onClick).not.toBeUndefined();
		expect(wrapper.props().onKeyUp).not.toBeUndefined();

	});
	
});
