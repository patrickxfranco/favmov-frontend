import { Container } from "./styles";

export function Card({ contentCover, contentTitle }) {
  return(
    <Container href="#" title={contentTitle} contentCover={contentCover}>
      <img src={contentCover} alt={`Capa de ${contentTitle}`} />
      <h2>{contentTitle}</h2>
    </Container>
  );
}