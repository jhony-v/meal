import React from "react";
import { UIContainer } from "shared/styled/StyledWrappers/UIContainer.styled";
import { useTheme } from "emotion-theming";

export default function HomeWrapperExtraButton({icon: IconButton,...restProps} : any) {
  const { colors } = useTheme();
  return (
    <UIContainer {...restProps} block mr="20px">
      <IconButton size={22} color={colors.primary} {...restProps} />
    </UIContainer>
  );
}
