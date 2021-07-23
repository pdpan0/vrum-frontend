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