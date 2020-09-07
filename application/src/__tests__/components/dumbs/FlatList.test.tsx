import React from "react";
import FlatList from "shared/components/dumbs/FlatList";
import { mount, ReactWrapper } from "enzyme";

interface Item {
	item: string;
}
const items: Item[] = [{ item: "a" }, { item: "b" }, { item: "c" }];

let wrapperMountComponentList: ReactWrapper<any>;
beforeEach(function () {
	wrapperMountComponentList = mount(
		<FlatList
			renderHeader={<span className="header" />}
			renderFooter={<span className="footer" />}
			data={items}
			render={(e: Item, i) => <div key={i}>{e.item}</div>}
		/>
	);
});

describe("test FlatList", function () {
	it("should items render is correct", function () {
		expect(wrapperMountComponentList.props().data.length).toEqual(items.length);
	});

	it("should exists header", function () {
		expect(wrapperMountComponentList.props().renderHeader).not.toBeUndefined();
	});
	it("should exists footer", function () {
		expect(wrapperMountComponentList.props().renderHeader).not.toBeUndefined();
	});
	it("should render items of list", function () {
		expect(wrapperMountComponentList.find(<div/>)).toBeDefined();
	});
});
