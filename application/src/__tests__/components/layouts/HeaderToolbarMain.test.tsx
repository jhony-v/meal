import React from "react";
import HeaderToolbarMain from "shared/components/layouts/HeaderToolbarMain";
import IconApplication from "shared/packages/GeneralApplication/IconApplication";
import ChipUsername from "shared/packages/User/UserDecorators/ChipUsername";
import { shallowWithEncapsulate } from "utils/testRenderEncapsulates";
import HeaderLinksNavigation from "shared/components/layouts/HeaderToolbarMain/HeaderLinksNavigation";

describe("HeadertoolbarMain component", () => {
	it("should have a layouts principals", () => {
		const wrapper = shallowWithEncapsulate(<HeaderToolbarMain />);
		const containSingleIconApplication = wrapper.find(IconApplication);
		const containSingleIconChipUsername = wrapper.find(ChipUsername);
		const containSingleLinksNavigation = wrapper.find(HeaderLinksNavigation);
		const validExists = [
			containSingleIconApplication,
			containSingleIconChipUsername,
			containSingleLinksNavigation,
		].map((e) => e.length);
		expect(validExists).toEqual([1, 1, 1]);
	});
});
