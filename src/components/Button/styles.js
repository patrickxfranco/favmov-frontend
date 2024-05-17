import styled from "styled-components";

export const Container = styled.button`
  height: 5rem;
  width: 5rem;

  flex-direction: row;
  display: flex;
  gap: 1rem;

  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BUTTON };
  color: ${({ theme }) => theme.COLORS.COLOR_BUTTON };
  border-radius: 0.4rem;
  cursor: pointer;
  border: none;

  transition: all 0.2s;

  &:hover {
    outline: 0.4rem solid ${({ theme }) => theme.COLORS.CONTRAST_COLOR };
    filter: brightness(0.8);
  }
`;