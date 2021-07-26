import styled from "styled-components";

export const LoadingWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(167, 164, 164, 0.5);
`;

export const LoadingIconWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    color: white;
`;

export const SVGWrapper = styled.img`
    width: 5rem;
    height: 5rem;
`;