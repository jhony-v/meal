import styled from "@emotion/styled";
import { Img } from "react-image";

// dynamic styles with logic
const defaultBorderRadius = "100%";
const sizeAvatar = (props) => {
  return props.sizeAvatar ? props.sizeAvatar : 40;
};

// define all styled components

export const UIAvatarImage = styled(Img)`
  width: ${sizeAvatar}px;
  height: ${sizeAvatar}px;
  border-radius: ${(props) => props.radius || defaultBorderRadius};
  -webkit-user-drag: none;
`;

export const UIAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${sizeAvatar}px;
  height: ${sizeAvatar}px;
  color: ${(props) => props.color};
  border-radius: ${(props) => props.radius || defaultBorderRadius};
`;

export const UIAvatarFeaturedPrimary = styled(UIAvatar)`
  border: 2px solid ${(props) => props.theme.colors.primary};
  padding: 4px;
  box-sizing : content-box;
`;
