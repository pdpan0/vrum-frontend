import React from 'react'
import { TooltipWrapper } from './style'

const Tooltip = ({ displayText, children, onClick }) => {
    console.log(onClick)
    return (
    <TooltipWrapper onClick={()=> onClick()}>
        {children}
        <span>{displayText}</span>
    </TooltipWrapper>
)}

export default Tooltip;