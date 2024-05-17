import styled from "styled-components";

export const Container = styled.label`
  flex-direction: row;
  display: flex;
  flex: 1;

  width: 100%;

  justify-content: center;
  align-items: center;

  border-radius: 0.4rem;
  overflow: hidden;
  
  cursor: pointer;

  transition: all 0.2s;

  &:hover {
    outline: 0.4rem solid ${({ theme }) => theme.COLORS.CONTRAST_COLOR };
    filter: brightness(0.8);
  }

  textarea {
    height: 18rem;
    width: 100%;

    padding: 1rem;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT };
    color: ${({ theme }) => theme.COLORS.COLOR_INPUT };
    font-size: 1.7rem;
    /* border-radius: 0 0.4rem 0.4rem 0; */
    resize: vertical;
    outline: none;
    border: none;
  }

  textarea::placeholder {
    color: ${({ theme }) => theme.COLORS.COLOR_INPUT };
  }

  #input-icon {
    height: 5rem;
    width: 5rem;
    
    flex-direction: row;
    display: flex;

    justify-content: center;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BUTTON };
    color: ${({ theme }) => theme.COLORS.COLOR_BUTTON };
    /* border-radius: 0.4rem 0 0 0.4rem; */
  }
`;