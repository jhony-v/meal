import React from 'react'
import UITextSmooth from 'shared/styled/UITextSmooth';
import UIText from 'shared/styled/UIText';
import UIFlexContainer from 'shared/styled/UIFlexContainer';
import PropTypes from "prop-types";
import { useTheme } from 'emotion-theming';
import { jsx } from "@emotion/core";

/**@jsx jsx */

export default function SpectrumBadgeScore({ score, title, color }) {
    let theme = useTheme();
    let cssScore = { color: theme.icons.color[color] };
    return (
        <UIFlexContainer flexDir="column" align="center">
            <UIText css={cssScore} weight>{score}</UIText>
            <UITextSmooth>{title}</UITextSmooth>
        </UIFlexContainer>
    )
}

SpectrumBadgeScore.propTypes = {
    score: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    color: PropTypes.oneOf(['red', 'blue', 'yellow']).isRequired,
}

SpectrumBadgeScore.defaultProps = {
    score: 0,
    title: "",
}