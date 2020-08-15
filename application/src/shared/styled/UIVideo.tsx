import styled from "@emotion/styled";

type UIVideoSimpleProps = {
	width: string;
	height: string;
	fullScreen: boolean;
};

export const UIVideoSimple = styled.video<UIVideoSimpleProps>(
	(props: UIVideoSimpleProps) => ({
		userSelect: "none",
		objectFit: "cover",
		display: "block",
		width: props.width || "100%",
		height: props.fullScreen ? "100%" : props.height || "100px",
	})
);
