import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import { UIContainer } from 'shared/styled/UIContainer'
import { AnimatePresence } from 'framer-motion'

const HoverElement = ({ elementHover, elementHoverView, elementHoverViewProps }) => {
    let [visible, setVisible] = useState(false);
    let setShowVisible = useCallback(() => setVisible(true));
    let setHideVisible = useCallback(() => setVisible(false));
    let variants = {
        show: {
            opacity: 1,
        },
        hide: {
            opacity: 0
        }
    }

    return (
        <UIContainer
            position="relative"
            onMouseEnter={setShowVisible}
            onMouseLeave={setHideVisible} >
            <UIContainer >{elementHover}</UIContainer>
            <AnimatePresence>
                {visible && (
                    <UIContainer
                        variants={variants}
                        initial="hide"
                        animate="show"
                        exit="hide"
                        {...elementHoverViewProps}
                    >
                        {elementHoverView}
                    </UIContainer>
                )}
            </AnimatePresence>
        </UIContainer>
    )
}

HoverElement.propTypes = {
    elementHover: PropTypes.element,
    elementHoverView: PropTypes.element,
}

export default HoverElement;

