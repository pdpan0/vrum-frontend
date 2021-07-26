import styled from "styled-components"

export const Container = styled.article`
    width: 80%;
    padding: 1.8rem;
    border: .5px solid #AAAAAA;
    display: grid;
    grid-template-areas:
        'header'
        'info '
        'table';
    grid-gap: 10px;
`;

export const ImageProfile = styled.div`
    width: 10rem;
    height: 10rem;
    grid-area: header;
    justify-self: center;
    align-items: center;
    border-radius: 50%;
    border: 5px solid var(--secondary-color);

    .profile-icon {
        width: 6rem;
        height: 6rem;
        position: relative;
        top: 50%;
        left: 50%;
        transform: translateY(-50%) translateX(-50%);
        color: var(--secondary-color);
    }
`;

export const ProfileInfo = styled.div`
    grid-area: info;
    justify-self: center;
`;

export const ActionWrapper = styled.div`
    grid-area: action;
`;

export const Wrapper = styled.div`
    text-align: justify;
`;

export const TableWrapper = styled.div`
    grid-area: table;
    margin: 2.5rem;
`;