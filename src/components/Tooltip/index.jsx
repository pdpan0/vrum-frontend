import React from 'react'
import { TooltipWrapper } from './style'

const Tooltip = ({ displayText, children }) => (
    <TooltipWrapper>
        {children}
        <span>{displayText}</span>
    </TooltipWrapper>
)

export default Tooltip;