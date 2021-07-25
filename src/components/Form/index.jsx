import React from 'react';
import { FormWrapper, InputWrapper, LabelWrapper } from './style';

export const Form = ({ children, onSubmit }) => (
    <FormWrapper onSubmit={onSubmit}>
        {children}
    </FormWrapper>
)

export const Label = ({ children }) => (
    <LabelWrapper>
        {children}
    </LabelWrapper>
)

export const Input = (props) => (
    <InputWrapper {...props} />
)