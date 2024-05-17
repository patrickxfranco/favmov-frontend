import { Container } from "./styles";

export function Button({ icon: Icon, ...rest }) {
  return(
    <Container {...rest}>
      {<Icon size={30} />}
    </Container>
  );
}