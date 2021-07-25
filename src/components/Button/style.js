import styled from "styled-components";
import { Link } from "react-router-dom";

export const RedirectButtonWrapper = styled(Link)`
    padding: .55rem;
    color: #fff;
    background-color: var(--primary-color);
    border-radius: 5px;
    text-decoration: none;
    transition: .1s ease-in;

    :hover {
       background-color: var(--secondary-color);
    }
`;

export const FormButtonContainer = styled.div`
    width: 100%;
    display: inherit;
    justify-content: center;
    margin: 2rem;
`;

export const FormButtonWrapper = styled.button`
    padding: .55rem;
    color: #fff;
    background-color: var(--primary-color);
    border: .5px solid #AAAAAA;
    border-radius: 5px;
    transition: .1s ease-in;

    :hover {
        background-color: var(--secondary-color);
    }
`;