import styled from "styled-components";

export const FormWrapper = styled.form`
    width: 80%;
    padding: 1.8rem;
    border: .5px solid #AAAAAA;
    display: flex;
    flex-direction: column;
`;

export const LabelWrapper = styled.label`
    width: 100%;
`;

export const InputWrapper = styled.input`
    width: 100%;
    padding: .6rem;
    margin-top: .8rem;
    border-radius: .2rem;
    border: .5px solid #AAAAAA;

    &&[type="radio"] {
        margin: 0;
    }
`;