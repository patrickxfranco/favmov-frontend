import styled from "styled-components";

export const Container = styled.div`
  max-width: 70rem;
  height: 100vh;

  margin: 0 auto;

  section main {
  color: ${({ theme }) => theme.COLORS.COLOR_INPUT };
  }
  
  ul {
    line-height: 200%;
    padding-left: 1.8rem;
  }

  svg:nth-child(2) {
    margin: 5rem 0;
    color: ${({ theme }) => theme.COLORS.CONTRAST_COLOR };
  }

  p {
    line-height: 200%;
    text-align: center;
    margin-bottom: 3rem;
  }
`;