import React from "react";
import FlatList from "shared/components/dumbs/FlatList";
import { mount, ReactWrapper } from "enzyme";

interface Item {
	item: string;
}
const items: Item[] = [{ item: "a" }, { item: "b" }, { item: "c" }];

let wrapperMountComponentList: ReactWrapper<any>;
beforeEach(() => {
	wrapperMountComponentList = mount(
		<FlatList
			renderHeader={<span className="header" />}
			renderFooter={<span className="footer" />}
			data={items}
			render={(e: Item, i) => <div key={i}>{e.item}</div>}
		/>
	);
});

describe("test FlatList", () => {
	it("should items render is correct", function () {
		const lengthOfRenderItems = wrapperMountComponentList.props().data.length;
		expect(lengthOfRenderItems).toEqual(items.length);
	});

	it("should exists header", () => {
		const headerProp = wrapperMountComponentList.props().renderHeader;
		expect(headerProp).not.toBeUndefined();
	});
	it("should exists footer", () => {
		const footerProp = wrapperMountComponentList.props().renderFooter;
		expect(footerProp).not.toBeUndefined();
	});
	it("should render items of list", () => {
		expect(wrapperMountComponentList.find(<div />)).toBeDefined();
	});
});
