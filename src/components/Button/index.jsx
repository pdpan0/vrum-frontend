import React from 'react'
import { RedirectButtonWrapper, FormButtonWrapper, FormButtonContainer } from './style'

export const RedirectButton = ({ href, children }) => (
    <RedirectButtonWrapper to={href}>
        {children}
    </RedirectButtonWrapper>
)

export const FormButton = (props) => (
    <FormButtonContainer>
        <FormButtonWrapper {...props}>
            {props.children}
        </FormButtonWrapper>
    </FormButtonContainer>
)