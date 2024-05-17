import { Container } from "./styles";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import { Input } from "../../components/Input";

import { MdOutlineArrowBackIos, MdOutlineLightbulb, MdKey } from "react-icons/md";
import { GiCash } from "react-icons/gi";

export function Donate() {
  return(
    <Container>
      <Header>
        <Button icon={MdOutlineArrowBackIos} title="Voltar" type="button" />
      </Header>
      <main>
        <Section icon={MdOutlineLightbulb} title="Planos Futuros">
          <ul>
            <li>Adição de mais temas;</li>
            <li>Separação de conteúdos por categoria;</li>
            <li>Criação e atribuição de tags para cada conteúdo;</li>
            <li>Seleção para marcar conteúdos a assistir, assistindo ou assistido;</li>
            <li>Contas de usuário para armazenar suas informações em um banco de dados externo;</li>
            <li>Criação da aplicação mobile.</li>
          </ul>
          <GiCash size={80} />
          <p>Gosta da aplicação? Que tal me pagar um café para me motivar a continuar as atualizações? Copie meu PIX abaixo</p>
          <Input icon={MdKey} value="a0a14500-8373-44e4-9756-c0fd86a49c9d" id="input-pix" readOnly />
        </Section>
      </main>
    </Container>
  );
}