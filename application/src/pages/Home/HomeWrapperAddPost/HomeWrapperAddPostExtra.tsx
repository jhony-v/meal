import React from "react";
import { IoIosImage, IoIosHappy, IoIosPersonAdd } from "react-icons/io";
import HomeWrapperExtraButton from "./HomeWrapperExtraButton";
import { UIFlexContainer } from "shared/styled/StyledWrappers/UIFlexContainer.styled";

export default () => {
    return (
    <UIFlexContainer>
        <HomeWrapperExtraButton icon={IoIosPersonAdd} />
        <HomeWrapperExtraButton icon={IoIosImage} />
        <HomeWrapperExtraButton icon={IoIosHappy} />
    </UIFlexContainer>
  );
};
