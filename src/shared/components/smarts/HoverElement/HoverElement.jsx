import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import UIContainer from 'shared/styled/UIContainer'
import { AnimatePresence } from 'framer-motion'

const HoverElement = ({ elementHover, elementHoverView, elementViewProps }) => {
    let [visible, setVisible] = useState(false);
    let setShowVisible = useCallback(() => setVisible(true), [visible]);
    let setHideVisible = useCallback(() => setVisible(false), [visible]);
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
                        {...elementViewProps}
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

