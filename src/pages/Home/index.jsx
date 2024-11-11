import { Container } from "./styles";

import { Header } from "../../components/Header";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Card } from "../../components/Card";
import { Section } from "../../components/Section";

import { MdAdd, MdManageSearch, MdAttachMoney, MdOutlineStar } from "react-icons/md";

export function Home() {
	return (
		<Container>
			<Header>
				<Button icon={MdAdd} title="Adicionar novo conteúdo" type="button" />
				<Input icon={MdManageSearch} placeholder="Buscar seus conteúdos" id="input-search" />
				<Button icon={MdAttachMoney} title="Fazer uma doação ao desenvolvedor" type="button" />
			</Header>
			<main>
				<Section icon={MdOutlineStar} title="Meus Favoritos">
					<Card contentCover="https://images6.alphacoders.com/111/1114212.jpg" contentTitle="Stranger Things" />
					<Card contentCover="https://images3.alphacoders.com/120/1206784.jpg" contentTitle="Vinland Saga" />
					<Card contentCover="https://images8.alphacoders.com/525/525487.jpg" contentTitle="Sons Of Anarchy" />
					<Card contentCover="https://wallpapercave.com/wp/wp2365274.jpg" contentTitle="Vikings" />
				</Section>
			</main>
		</Container>
	);
}
