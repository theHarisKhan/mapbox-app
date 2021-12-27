import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#0E2A47",
  text: "#FFF",
};

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;600;700&display=swap');
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        font-family: 'Kanit', sans-serif;
        font-weight: 300;
        font-style: normal;
        transition: all 0.50s linear;
    }
    input, textarea, button{
        font-family: inherit;
        outline: none;
    }
    a{
        text-decoration: none;
    }
`;
