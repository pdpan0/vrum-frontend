import styled from "styled-components"

export const Container = styled.article`
    width: 80%;
    padding: 1.8rem;
    border: .5px solid #AAAAAA;
    width: 50rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ImageProfile = styled.div`
    width: 10rem;
    height: 10rem;
    display: inherit;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 5px solid var(--secondary-color);

    .profile-icon {
        width: 6rem;
        height: 6rem;
        color: var(--secondary-color);
    }
`;

export const ProfileInfo = styled.div`
    
`;

export const Wrapper = styled.div`
    width: 100%;
    display: inherit;
    flex-direction: row;
    justify-content: center;

    a {
        display: inherit;
        align-self: flex-end;
    }
`;