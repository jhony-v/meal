import React from 'react'
import { UIText } from 'shared/styled/UIText.styled';
import { Link } from 'react-router-dom';
import { UIContainer } from 'shared/styled/UIContainer.styled';
import useStyleLinkMatch from 'shared/hooks/useStyleLinkMatch';

const NavigatorLinkTab = (props : NavigatorLinkTabProps) => {
	const { to : path ,exact , text } = props;
	const { borderBottomCurrentColor, cssColor } = useStyleLinkMatch({ path, exact });
	return (
			<UIText block weight textAlign="center" color={cssColor}>
				<Link to={path}>
					<UIContainer py={3} css={borderBottomCurrentColor}>{text}</UIContainer>
				</Link>
			</UIText>
		)
}

type NavigatorLinkTabProps = {
	to ?: string;
	exact ?: boolean;
	text ?: string;
}

export default NavigatorLinkTab
