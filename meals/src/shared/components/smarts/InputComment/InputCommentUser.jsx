import React from "react";
import { UIContainer } from "shared/styled/UIContainer";
import { UIInput } from "shared/styled/UIInput";
import { UICardFlat } from "shared/styled/UICard";
import { UIFlexContainer } from "shared/styled/UIFlexContainer";
import { UIAvatarImage } from "shared/styled/UIAvatar";

export default ({ name }) => {
  return (
    <UICardFlat radius="10px">
      <UIFlexContainer padding="20px">
        <UIAvatarImage src="https://cdn.pixabay.com/photo/2020/07/10/15/37/apple-5391076__340.jpg"  />
      </UIFlexContainer>
    </UICardFlat>
  );
};
