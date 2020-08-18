import React, { memo, ReactNode } from "react";
import { UIContainer } from "shared/styled/UIContainer.styled";
import { UIFlexContainer } from "shared/styled/UIFlexContainer.styled";
import { UIText } from "shared/styled/UIText.styled";
import { useTheme } from "emotion-theming";
import { NavLink } from "react-router-dom";
import useAnimationHoverRotate from "shared/animations/useAnimationHoverRotate";
import { MThemes } from "themes/themes.types";

const NavigatorLink = ({ to, icon: IconLink, children, exact } : NavigatorLinkProps) : JSX.Element => {
  const theme = useTheme<MThemes.ThemeBaseProps>();
  const hoverRotate = useAnimationHoverRotate();
  const activeStyle = { color: theme.colors.primary };
	
	return (
    <hoverRotate.ContainerMotion>
      <NavLink exact={exact} to={to} activeStyle={activeStyle}>
        <UIFlexContainer alignItems="center" justifyContent="center">
          <hoverRotate.AnimateMotion>
            <IconLink />
          </hoverRotate.AnimateMotion>
          <UIContainer ml="10px">
            <UIText fontSize="normal.2" weight >
              {children}
            </UIText>
          </UIContainer>
        </UIFlexContainer>
      </NavLink>
    </hoverRotate.ContainerMotion>
  );
};

type NavigatorLinkProps = {
	to : string;
	icon : Function;
	children : string | ReactNode,
	exact ?: boolean;
}

export default memo(NavigatorLink);
