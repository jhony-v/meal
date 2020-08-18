import React from "react";
import FlatList from "shared/components/dumbs/FlatList";
import { UIContainer } from "shared/styled/UIContainer.styled";
import { UITextBoldLarge } from "shared/styled/UIText.styled";
import { UIButton } from "shared/styled/UIButton.styled";
import HomeTrendItem from "./HomeTrendItem";
import HomeTrendItemUserDetail from "./HomeTrendItemUserDetail";

const HomeTrendsContainer = () => {
  return (
    <FlatList
      data={Array(4).fill(0)}
      renderHeader={<UITextBoldLarge>Trends</UITextBoldLarge>}
      renderFooter={<UIContainer mt="2em"><UIButton variant="primary" block>New post</UIButton></UIContainer>}
      render={(e : any, i : any) => (
        <HomeTrendItem key={i} title="# New Event treends" detail="2353, Tweets" index={i}>
            <HomeTrendItemUserDetail/>
        </HomeTrendItem>
        )}
    />
  );
};

export default HomeTrendsContainer;
