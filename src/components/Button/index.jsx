import React from 'react'
import { RedirectButtonWrapper, FormButtonWrapper, FormButtonContainer } from './style'

export const RedirectButton = (props) => (
    <RedirectButtonWrapper {...props}>
        {props.children}
    </RedirectButtonWrapper>
)

export const FormButton = (props) => (
    <FormButtonContainer>
        <FormButtonWrapper {...props}>
            {props.children}
        </FormButtonWrapper>
    </FormButtonContainer>
)