import styled from "@emotion/styled";

// dynamic styles with logic
const defaultBorderRadius = "100%";
const computeSizeAvatar = (props) => {
  return props.sizeAvatar ? props.sizeAvatar : 40;
};

// define all styled components

export const UIAvatarImage = styled.img`
  -webkit-user-drag: none;
  width: ${computeSizeAvatar}px;
  height: ${computeSizeAvatar}px;
  border-radius: ${(props) => props.radius || defaultBorderRadius};
`;

export const UIAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${computeSizeAvatar}px;
  height: ${computeSizeAvatar}px;
  color: ${(props) => props.colorAvatar};
	border-radius: ${(props) => props.radius || defaultBorderRadius};
	background: ${props => props.background};
`;

export const UIAvatarFeaturedPrimary = styled(UIAvatar)`
  padding: 4px;
  box-sizing : content-box;
  border: 2px solid ${(props) => props.theme.colors.primary};
`;

export const UIAvatarFeaturedOutlined = styled(UIAvatar)`
	border : 1px solid rgba(0,0,0,.1);
`;