import { Container } from "./styles";

export function Input({ icon: Icon, placeholder, id, ...rest }) {
  return(
    <Container htmlFor={id} title={placeholder}>
      {Icon &&
        <div id="input-icon">
          <Icon size={30} />
        </div>
      }
      <input {...rest} placeholder={placeholder} id={id} />
    </Container>
  );
}