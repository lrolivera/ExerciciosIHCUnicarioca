# Tema 06 – Transformar HTML em React

Programação Web Front-End (IHC) – Unicarioca

Página em React (via CDN) com:
- campo de nome com exibição em tempo real (`useState` + `onChange`);
- lista de tarefas gerada com `.map()`;
- botão que conta cliques (`onClick`).

## Estrutura

```
tema06-exercicio1/
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
