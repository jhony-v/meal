import React from "react";
import { shallow, mount } from "enzyme";
import Drawer from "shared/components/layouts/Drawer";

describe("Drawer layout", () => {
	const items = {
		left: <p>left</p>,
		right: <p>right</p>,
	};
	it("should have a children", () => {
		const wrapper = shallow(
			<Drawer>
				{items.left}
				{items.right}
			</Drawer>
		);
		expect(wrapper.contains(items.left)).toBeTruthy();
		expect(wrapper.contains(items.right)).toBeTruthy();
	});

	it("should valid prop isDrawer", () => {
		const isDrawer = true;
		const wrapper = mount(<Drawer>component</Drawer>);
		expect(wrapper.props().isDrawer).toBeUndefined();
		wrapper.setProps({
			isDrawer,
		});
		expect(wrapper.props().isDrawer).toEqual(isDrawer);
	});
});
