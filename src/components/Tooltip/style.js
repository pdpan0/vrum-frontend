import styled from "styled-components";

export const TooltipWrapper = styled.div`
    position: relative;
    display: inline-block;
    border-bottom: 1px dotted black;
    cursor: pointer;

    span {
        visibility: hidden;
        width: 120px;
        background-color: #555;
        color: #fff;
        text-align: center;
        border-radius: 6px;
        padding: 5px 0;
        position: absolute;
        z-index: 1;
        bottom: 150%;
        left: 50%;
        margin-left: -60px;
        opacity: 0;
        transition: opacity 0.3s;
    }
      
    span::after {
        content: "";
        position: absolute;
        top: 100%;
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: #555 transparent transparent transparent;
    }
      
    :hover span {
        visibility: visible;
        opacity: 1;
    }
`;