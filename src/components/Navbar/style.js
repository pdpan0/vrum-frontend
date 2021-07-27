import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarWrapper = styled.nav`
    width: 100%;
    height: 50px;
    background-color: #E3E3E3;
    border-bottom: solid 0.5px #CCCCCC;
    box-shadow: 0px 1px 5px 2.5px rgba(0, 0, 0, 0.2);
    text-align: center;
    line-height: 50px;
    `;

export const LogoWrapper = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--primary-color);
    font-size: 1.8rem;
    text-decoration: none;
    font-weight: bold;
    transition: .1s ease-in;

    :hover {
        opacity: .5;
    }
`;