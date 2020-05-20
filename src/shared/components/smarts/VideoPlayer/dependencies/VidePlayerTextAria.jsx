import React from "react"
import PropTypes from 'prop-types';
import UIText from 'shared/styled/UIText';
import { UISpanAnimated } from 'shared/styled/UIAnimated';

export default function VideoPlayerTextArea({ animate, children }) {
    return (
        <UISpanAnimated initial={animate} animate={animate} >
            <UIText variant="light">{children}</UIText>
        </UISpanAnimated>
    )
}

VideoPlayerTextArea.defaultProps = {
    animate: {},
    children: ""
}

VideoPlayerTextArea.propTypes = {
    animate: PropTypes.object,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
}