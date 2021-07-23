import styled from "styled-components";

export const Table = styled.table`
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
    margin: 1rem;

    td, th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
    }

    td, th:nth-child(6) {
        text-align: center;
    }

    td, th:nth-child(7) {
        text-align: center;
    }
`;

export const StatusIcon = styled.div`
    width: .8rem;
    height: .8rem;  
    border-radius: 50%;
    background-color: ${props => props.status ? "#27ae60" : "#c0392b"}
`;