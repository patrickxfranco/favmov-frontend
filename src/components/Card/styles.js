import styled from "styled-components";

export const Container = styled.a`
  height: 12rem;
  width: 100%;

  display: flex;
  
  border-radius: 0.8rem;
  overflow: hidden;

  position: relative;

  /* background: url(${({ contentCover }) => contentCover }) no-repeat center; */
  background-size: 100%;
  text-decoration: none;

  color: ${({ theme }) => theme.COLORS.COLOR_CARD };
  text-transform: uppercase;

  h2 {
    font-size: 3.4rem;
    font-weight: 800;
    position: absolute;
    top: 3rem;
    left: 2rem;
    transition: all 0.05s;
    background-color: transparent;
  }

  img {
    height: max-content;
    width: 100%;
    align-self: center;
    object-fit: cover;
    aspect-ratio: 16/9;
    filter: brightness(0.5);
    transition: all 0.1s;
  }

  &:hover img {
    filter: contrast(110%) saturate(125%);
    transform: rotate(-2deg) scale(105%);
  }
`;
