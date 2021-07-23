import React from 'react'
import { RedirectButtonWrapper } from './style'

export const RedirectButton = ({ href, children }) => (
    <RedirectButtonWrapper to={href}>
        {children}
    </RedirectButtonWrapper>
)