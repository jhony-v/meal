import React from "react";
import ChipSimple from "shared/components/dumbs/ChipSimple";
import { mount } from "enzyme";
import { UIChipCloseButton } from "shared/styled/StyledActionsCommon/UIChip.styled";

describe("Chip simple", () => {
	it("should work property noRemove", () => {
		const wrapper = mount(<ChipSimple noRemove>message</ChipSimple>);
		expect(wrapper.find(UIChipCloseButton)).toHaveLength(0);
	});

	it("should exists button UIChipCloseButton", () => {
		const wrapper = mount(<ChipSimple>message</ChipSimple>);
		expect(wrapper.find(UIChipCloseButton)).toHaveLength(1);
	});

});
