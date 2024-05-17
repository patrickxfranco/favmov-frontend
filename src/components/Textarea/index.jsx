import { Container } from "./styles";

export function Textarea({ placeholder, id, ...rest }) {
  return(
    <Container htmlFor={id} title={placeholder}>
      <textarea {...rest} placeholder={placeholder} id={id} />
    </Container>
  );
}