# FAVMOV FRONTEND

Projeto pessoal desenvolvido com React + Vite

## Pra que serve?
O intuito é dar ao usuário a possibilidade de gerenciar seus links de onde assiste filmes e séries, isso acaba sendo mais útil para as pessoas que não possuem uma assinatura dos serviços de streaming e que acaba utilizando diversos sites para acessar os conteúdos. Pode server também como um atalho já que muitos destes sites que hospedam filmes e séries de forma ilícita acaba colocando muitos anúncios para chegar na página onde realmente está o player de vídeo, portanto, salvando os links direto do player no favmov você evita de ter que passar por diversas propagandas chatas que abrem outras 1000 guias em seu navagador.

## Qual intuito?
O intuito da aplicação é permitir que o usuário gerencie seus links em uma interfaca amigável e bonita, de uma forma rápida e dinâmica, por este motivo, não é necessário criar uma conta. Todas as informações são armazenadas no localStorage do seu navegador, com isso, todas as informações estarão sempre disponíveis pra você.

## Como posso pegar as informações de formatação?
Eu criei um figma para este projeto mas a realidade é que fiz algumas alterações durante o desenvolvimento, portanto terá algumas diferenças, mas se quiser, o link para o projeto no figma é [este](https://www.figma.com/design/9qybq8v8eMwyhdShVXz9OW/favmov?node-id=0%3A1&t=ZiY5bl2od44WVjp5-1):

## Como é a interface da aplicação?
Veja abaixo:

![Captura de tela_17-5-2024_13259_localhost](https://github.com/patrickxfranco/frontend-favmov/assets/52086621/3bde27a9-4b03-48cc-a483-784cfe5c1776)

![Captura de tela_17-5-2024_13329_localhost](https://github.com/patrickxfranco/frontend-favmov/assets/52086621/7a3df32b-f3ef-429c-9c15-3c0e6e76c885)

![Captura de tela_17-5-2024_13354_localhost](https://github.com/patrickxfranco/frontend-favmov/assets/52086621/1d13ac55-0206-4f15-bcdc-ab7e406b83d1)

![Captura de tela_17-5-2024_13421_localhost](https://github.com/patrickxfranco/frontend-favmov/assets/52086621/8e436ec5-bf3c-4701-8600-2275455de958)

## Como rodar a aplicação na minha própria máquina?
> É essencial ter o node instalado em sua máquina antes de qualquer coisa.
- Abra um diretório para armazenar o projeto;
- Rode o comando `gh repo clone patrickxfranco/frontend-favmov`;
- Entre na pasta do repositório digitando `cd frontend-favmod`;
- Instale as dependências do projeto com o comando `npm install`;
- Execute o projeto com o comando `npm run dev`.

  Neste momento você só precisa acessar o link mostrado no console e a aplicação já estará rodando.

Observação: Não inclui as rotas de navegação ainda, portanto, ao clicar nos botões a página não será alterada, você fazer isso entrando no arquivo principal `index.jsx` e alterando as importação e a chamada para o nome da página que deseja visualizar.
