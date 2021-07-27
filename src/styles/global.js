import { createGlobalStyle } from "styled-components";

const colors = {
    primary: '#4D7EB7',
    secondary: '#243B58',
    third: '#4D4D4D',
    background: '#EEEFEF' 
}

export const GlobalStyle = createGlobalStyle`    
    :root {
        --primary-color: ${colors.primary};
        --secondary-color: ${colors.secondary};
        --third-color: ${colors.third};
        --background: ${colors.background};
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        background-color: var(--background);
        font-family: 'Exo 2', sans-serif;
        font-size: 10px;
        font-weight: 400;
    }
`;