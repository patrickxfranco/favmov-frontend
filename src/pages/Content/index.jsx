import { Container } from "./styles";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";

import { MdOutlineArrowBackIos, MdOutlinePlayArrow, MdEditNote, MdLocalMovies } from "react-icons/md";
import { IoMdTrash } from "react-icons/io";

export function Content() {
  return(
    <Container>
      <img src="https://images6.alphacoders.com/111/1114212.jpg" alt="Stranger Things" />
      <Header>
        <Button icon={MdOutlineArrowBackIos} title="Voltar" type="button" />
      </Header>
      <div id="toolbar">
        <Button icon={MdOutlinePlayArrow} title="Ir para página do conteúdo" type="button" />
        <div>
          <Button icon={MdEditNote} title="Editar conteúdo" type="button" />
          <Button icon={IoMdTrash} title="Excluir conteúdo" type="button" />
        </div>
      </div>
      <Section icon={MdLocalMovies} title="Stranger Things" >
        <p>Passada na década de 1980, na cidade fictícia de Hawkings, Stranger Things conta a história de um garoto que desaparece misteriosamente e dos eventos paranormais que se passam em torno desse acontecimento. Os personagens principais são seu grupo de amigos que acabam fazendo amizade com uma menina fugida de um laboratório e com poderes psicocinéticos.</p>
      </Section>
    </Container>
  );
}