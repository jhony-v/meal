import React from "react"
import PropTypes from 'prop-types';
import Text from 'shared/styled/Text';
import { SpanUIAnimated } from 'shared/styled/Span';

export default function VideoPlayerTextArea({ animate, children }) {
    return (
        <SpanUIAnimated initial={animate} animate={animate} >
            <Text variant="light">{children}</Text>
        </SpanUIAnimated>
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