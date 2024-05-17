import styled from "styled-components";

export const Container = styled.div`
  max-width: 70rem;
  height: 100vh;

  margin: 0 auto;

  button:nth-child(3) {
    color: ${({ theme }) => theme.COLORS.CONTRAST_COLOR };
  }
`;