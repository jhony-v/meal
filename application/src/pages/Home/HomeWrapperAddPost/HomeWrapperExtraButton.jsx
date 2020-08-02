import React from "react";
import { UIContainer } from "shared/styled/UIContainer";
import { useTheme } from "emotion-theming";

export default function HomeWrapperExtraButton({icon: IconButton,...restProps}) {
  const { colors } = useTheme();
  return (
    <UIContainer {...restProps} block marginRight="20px">
      <IconButton size={22} color={colors.primary} {...restProps} />
    </UIContainer>
  );
}
