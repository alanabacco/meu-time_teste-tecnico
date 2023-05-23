# Meu Time

## Sobre o projeto

Projeto desenvolvido para o teste técnico de uma vaga frontend na [Trade Technology](https://tradetechnology.gupy.io/).

Meu time é um sistema onde o usuário pode escolher um time, de qualquer país, temporada e liga, e visualizar algumas informações como: jogadores, estatísticas, formação do time, entre outros.

## Ferramentas e tecnologias utilizadas

O framework Next.js foi utilizado porque atualmente a [documentação do React](https://pt-br.react.dev/learn/start-a-new-react-project) recomenda a criação de projetos utilizando algum framework.

- [React](https://react.dev/) - biblioteca de código aberto para interfaces gráficas
- [Next.js](https://nextjs.org/) - framework para React
- [TypeScript](https://www.typescriptlang.org/) - superset de javascript que adiciona recursos à linguagem

## Como executar o projeto localmente

Para executar o projeto de maneira local, você precisa ter o [NodeJS](https://nodejs.org/) e o [Git](https://git-scm.com/) instalados na sua máquina. Em seguida, execute os seguintes comandos um de cada vez em um terminal:

```bash
git clone https://github.com/alanabacco/meu-time_teste-tecnico # clonar o projeto
cd meu-time_teste-tecnico # entrar na pasta
npm install # instalar as dependências
npm run dev # para rodar o projeto localmente
```

abra o navegador e entre em http://localhost:3000/.

---

## 🚧 TODO

- [x] pegar os países
- [x] pegar as ligas do país
- [x] pegar os times da liga atual
- [x] validar api key no login
- [x] selecionar temporada
- [x] criar um logout
- [x] não deixar usuario ver a pág de escolha de times se não tiver colocado o token
- [ ] ao buscar informações (busca infos qdo seleciona time, ou muda uma info depois):
  - [x] ver lista jogadores
  - [x] formação mais utilizada na temporada
  - [x] tabela de resultados
  - [ ] gráfico de quantidade de gols marcados por tempo de jogo
- [ ] Refatorar

---

Desenvolvido por [Alana Bacco](https://github.com/alanabacco). <br />
[![Linkedin Badge](https://img.shields.io/badge/-Linkedin-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/alana-bacco/)](https://www.linkedin.com/in/alana-bacco/)
