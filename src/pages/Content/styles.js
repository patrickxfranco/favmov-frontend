import styled from "styled-components";

export const Container = styled.div`
  max-width: 70rem;
  height: 100vh;

  margin: 0 auto;

  position: relative;

  img {
    aspect-ratio: 16/9;
    object-fit: cover;
    height: 27rem;
    width: 100%;
  }

  > header {
    position: absolute;
    top: 0;
    opacity: 95%;
  }

  #toolbar {
    display: flex;
    flex-direction: row;
    padding: 2rem;
    justify-content: space-between;
  }

  #toolbar div {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }

  #toolbar > button:nth-child(1) {
    color: #4FCB6A;
  }

  section {
    margin-top: 5rem;
  }

  section main {
    text-align: justify;
  }
`;