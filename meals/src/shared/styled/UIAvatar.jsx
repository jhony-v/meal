import styled from "@emotion/styled";

// dynamic styles with logic
const defaultBorderRadius = "100%";
const sizeAvatar = (props) => {
  return props.sizeAvatar ? props.sizeAvatar : 40;
};

// define all styled components

export const UIAvatarImage = styled.img`
  -webkit-user-drag: none;
  width: ${sizeAvatar}px;
  height: ${sizeAvatar}px;
  border-radius: ${(props) => props.radius || defaultBorderRadius};
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
  padding: 4px;
  box-sizing : content-box;
  border: 2px solid ${(props) => props.theme.colors.primary};
`;
