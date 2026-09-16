# Empilha!

Jogo de habilidade criado com React e Vite. O objetivo é soltar blocos no momento certo para construir uma torre cada vez mais alta.

## Objetivo

Desenvolver uma aplicação interativa, responsiva e fácil de entender, utilizando componentes React, JavaScript e CSS, sem backend e sem banco de dados.

## Funcionalidades

- Bloco que se move automaticamente pela área do jogo.
- Botão para soltar o bloco.
- Atalho pela tecla **Espaço** ou **Seta para baixo**.
- Pontuação e recorde salvos no navegador.
- Níveis com aumento gradual de velocidade.
- Torre infinita com rolagem vertical automática conforme o jogador sobe.
- Tela de derrota quando o bloco não encaixa.
- Botão para iniciar uma nova partida.
- Interface responsiva para celular e computador.

## Tecnologias utilizadas

- React
- Vite
- JavaScript
- CSS
- Git e GitHub
- Vercel

## Estrutura de pastas

```text
src/
├── components/
│   ├── Footer.jsx
│   ├── Game.jsx
│   ├── GameBoard.jsx
│   ├── Header.jsx
│   ├── HowToPlay.jsx
│   └── ScoreBoard.jsx
├── App.jsx
├── main.jsx
└── styles.css
```

## Como instalar

No terminal do VS Code, dentro da pasta do projeto:

```bash
npm install
```

## Como executar

```bash
npm run dev
```

Abra o endereço exibido pelo Vite, normalmente:

```text
http://localhost:5173
```

## Como gerar o build

```bash
npm run build
npm run preview
```

## Comandos para criar com Vite

```bash
npm create vite@latest empilha-react -- --template react
cd empilha-react
npm install
npm run dev
```

## Versionamento com Git

```bash
git init
git add .
git commit -m "feat: cria jogo de empilhar blocos"
git branch -M main
git remote add origin URL_DO_REPOSITORIO
git push -u origin main
```

Sugestões de commits:

```text
feat: cria mecânica de empilhamento dos blocos
style: adiciona interface responsiva do jogo
feat: adiciona pontuação e recorde local
docs: atualiza instruções do projeto
```

## Publicação no GitHub

1. Acesse [github.com](https://github.com) e faça login.
2. Clique em **New repository**.
3. Informe o nome `reac`.
4. Crie o repositório sem adicionar README, `.gitignore` ou licença.
5. Copie a URL HTTPS do novo repositório.
6. No terminal do VS Code, execute os comandos Git.
7. Substitua `URL_DO_REPOSITORIO` pela URL copiada.

## Deploy na Vercel

1. Acesse [vercel.com](https://vercel.com).
2. Faça login usando sua conta do GitHub.
3. Clique em **Add New...** e depois em **Project**.
4. Selecione o repositório `reac`.
5. Clique em **Import**.
6. Confira as configurações:

```text
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

7. Clique em **Deploy**.

A Vercel criará novos deploys automaticamente depois de cada `git push` na branch `main`.

## Como encontrar a URL pública

Após o deploy, abra o projeto na Vercel e clique em **Visit**. Também é possível acessar a aba **Deployments**, abrir o deploy com status **Ready** e copiar o domínio exibido.

## Autor

Jeniffer
