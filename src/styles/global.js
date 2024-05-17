import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  body {    
    height: 100vh;
    width: 100%;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_COLOR };
    color: ${({ theme }) => theme.COLORS.COLOR_INPUT };
  }

  body, input, textarea, button {
    font-family: 'Inter', sans-serif;
    font-size: 1.6rem;
  }
`;