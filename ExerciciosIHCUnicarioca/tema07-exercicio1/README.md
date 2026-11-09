# Tema 07 – Criando seu próprio componente com React

Programação Web Front-End (IHC) – Unicarioca

Componentes: `Titulo`, `Formulario`, `Mensagem` e o novo **`Saudacao`**.

- `Saudacao` recebe a prop `nome`.
- Nome vazio: mostra "Bem-vindo(a)! Digite seu nome acima".
- Nome preenchido: mostra "Olá, [nome]! Que bom ter você aqui".
- É exibido abaixo de `Mensagem`, dentro de `App`.

## Estrutura

```
tema07-exercicio1/
├── index.html
├── css/
│   └── style.css
└── js/
    └── app.js
```

## Como abrir
O `js/app.js` é carregado pelo Babel, que precisa de um servidor para ler o arquivo.
Dois jeitos simples:
- publicar no **GitHub Pages** ou **Netlify**; ou
- no VS Code, usar a extensão **Live Server** (botão direito no `index.html` → *Open with Live Server*).

Dar duplo clique no `index.html` (endereço `file://`) não funciona, porque o navegador bloqueia a leitura do `app.js`.
