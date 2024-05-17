import { Container } from "./styles";

import { Header } from "../../components/Header";

import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Card } from "../../components/Card";

import { MdOutlineArrowBackIos, MdAppRegistration, MdMovieEdit, MdImageSearch, MdDatasetLinked, MdSave } from "react-icons/md";

export function New() {
  return(
    <Container>
      <Header>
        <Button icon={MdOutlineArrowBackIos} title="Voltar" type="button" />
        <Button icon={MdSave} title="Salvar" type="submit" />
      </Header>
      <main>
        <Section icon={MdAppRegistration} title="Favoritar Conteúdo">
          <Card contentCover="https://images2.alphacoders.com/126/1262332.jpg" contentTitle="La Casa de Papel" />
          <Input icon={MdMovieEdit} placeholder="Digite aqui o título do filme/seriado" id="input-title" />
          <Input icon={MdImageSearch} placeholder="Cole o endereço de uma imagem aqui" id="input-image-url" />
          <Textarea placeholder="Escreva um resumo sobre o filme/seriado" id="textarea-about" />
          <Input icon={MdDatasetLinked} placeholder="Cole o link do site que você assiste este conteúdo" id="input-content-url" />
        </Section>
      </main>
    </Container>
  );
}