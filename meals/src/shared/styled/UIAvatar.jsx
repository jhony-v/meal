import styled from "@emotion/styled";
import { css } from "@emotion/core";

// dynamic styles with logic
const defaultBorderRadius = "100%";
const sizeAvatar = (props) => {
  return props.sizeAvatar ? props.sizeAvatar : 40;
};
const isPersonalized = (props) => {
  const personalized = css(`background: ${props.bgColor};`);
  const notPersonalized = css(
    `background: ${
      props.variant === "primary"
        ? props.theme.colors.primary
        : props.theme.colors.grayLight1
    }`
  );
  return props.personalized ? personalized : notPersonalized;
};

// define all styled components
export const UIAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${sizeAvatar}px;
  height: ${sizeAvatar}px;
  color: ${(props) => props.color};
  border-radius: ${(props) => props.radius || defaultBorderRadius};
  box-shadow: ${(props) => props.isMaterial && "inset 2px -2px 5px rgba(0,0,0,.5)"};

  ${isPersonalized}

  & > img {
    width: ${sizeAvatar}px;
    height: ${sizeAvatar}px;
    border-radius: ${(props) => props.radius || defaultBorderRadius};
    -webkit-user-drag: none;
  }
`;

export const UIAvatarFeaturedPrimary = styled.span`
  border: 2px solid ${(props) => props.theme.colors.primary};
  padding: 5px;
  border-radius: 100%;
`;
