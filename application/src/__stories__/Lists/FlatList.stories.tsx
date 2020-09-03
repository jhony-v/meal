import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import FlatList from "shared/components/dumbs/FlatList";
import StoryComponentProps from "__stories__/@types/StoryComponentProps";
import { UIContainer } from "shared/styled/UIContainer.styled";
import { UIButton } from "shared/styled/UIButton.styled";

export default {
	title: "Lists/FlatList",
	component: FlatList,
} as Meta;

type StoryFlatListProps = StoryComponentProps<typeof FlatList>;

interface IData {
	item: string;
	username: string;
}
const data: IData[] = [
	{
		item: "item 1",
		username: "Mark 3",
	},
	{
		item: "item 2",
		username: "Stiff",
	},
	{
		item: "item 2",
		username: "Jean",
	},
];

const renderItems = (e : IData,i : number) => (
	<UIContainer py={3} key={i}>
	<UIButton variant="default">{e.item} - {e.username}</UIButton>
	</UIContainer>
)

export const Default: StoryFlatListProps = () => (
	<FlatList
		data={data}
		render={renderItems}
	/>
);

export const ListWithHeaderFooter : StoryFlatListProps = () => (
	<FlatList
		data={data}
		renderHeader={<h1>List all items</h1>}
		renderFooter={<i>render complete</i>}
		render={renderItems}
	/>
)
