import React from 'react'
import { TooltipWrapper } from './style'

const Tooltip = (props) => {

    return (
    <TooltipWrapper {...props}>
        {props.children}
        <span>{props.displayText}</span>
    </TooltipWrapper>
)}

export default Tooltip;