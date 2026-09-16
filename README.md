# Modo Web

Landing page acadêmica criada para demonstrar um fluxo simples de desenvolvimento web: construir uma interface com React, versionar o código no GitHub e publicar o projeto na Vercel.

## Objetivo

Apresentar uma aplicação visualmente organizada, responsiva e fácil de explicar, utilizando componentes React e estilos CSS sem backend ou banco de dados.

## Funcionalidades

- Navegação por âncoras entre as seções da página.
- Hero principal com chamada para ação.
- Cards com as etapas do projeto: componentes, versionamento e publicação.
- Link para o repositório no GitHub.
- Formulário demonstrativo com mensagem de confirmação no navegador.
- Layout responsivo para computadores, tablets e celulares.

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
│   ├── ContactForm.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── Hero.jsx
│   └── Highlights.jsx
├── App.jsx
├── main.jsx
└── styles.css
```

## Como instalar

No terminal do VS Code, dentro da pasta do projeto, execute:

```bash
npm install
```

## Como executar

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

Depois, abra no navegador o endereço exibido pelo Vite, normalmente `http://localhost:5173`.

Para gerar e conferir a versão de produção:

```bash
npm run build
npm run preview
```

## Como criar o projeto com Vite

Caso queira iniciar um projeto semelhante do zero:

```bash
npm create vite@latest modo-web -- --template react
cd modo-web
npm install
npm run dev
```

## Versionamento com Git

```bash
git init
git add .
git commit -m "feat: adiciona estrutura inicial da aplicação React"
git branch -M main
git remote add origin URL_DO_REPOSITORIO
git push -u origin main
```

Mensagens de commit sugeridas:

```text
feat: cria componentes da landing page
style: adiciona layout responsivo e identidade visual
feat: adiciona interação ao formulário de contato
docs: atualiza instruções de instalação e deploy
```

## Publicação no GitHub

1. Acesse [github.com](https://github.com) e entre na sua conta.
2. Clique em **New repository**.
3. Informe um nome, como `meu-app-react`, e crie o repositório sem adicionar outro README.
4. No terminal do VS Code, execute os comandos de Git acima.
5. Troque `URL_DO_REPOSITORIO` pela URL HTTPS copiada do repositório criado.
6. Atualize a página do GitHub e confirme que os arquivos do projeto foram enviados.

## Deploy na Vercel

1. Acesse [vercel.com](https://vercel.com) e faça login com sua conta do GitHub.
2. No painel, clique em **Add New...** e depois em **Project**.
3. Selecione o repositório do projeto e clique em **Import**.
4. Confira as configurações: framework **Vite**, comando de build `npm run build` e diretório de saída `dist`.
5. Clique em **Deploy** e aguarde a conclusão da publicação.
6. A Vercel poderá criar novos deploys automaticamente sempre que houver um novo `git push` na branch `main`.

## Como encontrar a URL pública

Quando o deploy terminar, a Vercel exibirá um botão **Visit** ou **Domains** na tela do projeto. Clique nele para abrir a aplicação publicada e copie o endereço exibido no navegador. A URL também pode ser encontrada na aba **Deployments**, abrindo o deploy com status **Ready**.

## Autor

Jeniffer
