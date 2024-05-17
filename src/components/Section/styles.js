import styled from "styled-components";

export const Container = styled.section`
  color: ${({ theme }) => theme.COLORS.COLOR_SECTION };
  padding: 0 2rem;

  header {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;

    margin: 0 0 3rem;

    text-transform: uppercase;
    font-size: 2.4rem;
  }

  header svg {
    color: ${({ theme }) => theme.COLORS.CONTRAST_COLOR };
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
`;