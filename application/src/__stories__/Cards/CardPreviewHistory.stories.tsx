import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import CardPreviewHistory from "shared/components/smarts/CardPreviewHistory";
import { UIGrid } from "shared/styled/UIGrid.styled";

export default {
	title: "Cards/CardPreviewHistory",
	component: CardPreviewHistory,
} as Meta;

const image = "https://cdn.pixabay.com/photo/2020/09/15/08/05/sunrise-5572962__340.jpg";
const user = {
	avatar:	"https://cdn.pixabay.com/photo/2020/09/15/09/27/woman-5573135__340.jpg",
	fullName: "Mark Larry Page",
};

export const Default = () => (
	<CardPreviewHistory image={image} user={user} />
);


export const WithItems = () => (
	<UIGrid gridTemplateColumns="repeat(5,1fr)" gridGap="1px">
		{Array(5).fill(0).map((e : number,i :number) => (
			<CardPreviewHistory key={i} image={image} user={user} />
		))}
	</UIGrid>
)
