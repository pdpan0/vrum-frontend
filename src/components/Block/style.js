import styled from "styled-components"
import { Link } from "react-router-dom";

export const BlockWrapper = styled(Link)`
    background-color: var(--primary-color);
    width: 15rem;
    height: 8rem;
    margin: 2.5rem;
    border: 1px solid #CCCCCC;
    box-shadow: 1px 1px 5px .5px rgba(0, 0, 0, 0.2);
    text-decoration: none;
    border-radius: .5rem;
    text-align: center;
    color: #fff;
    transition: .2s ease-in;
    display: inherit;
    justify-content: inherit;
    align-items: center;

    :hover {
        background-color: var(--secondary-color);
    }
`;

export const BlockContainerWrapper = styled.div`
    display: flex;
    justify-content: center;
`;