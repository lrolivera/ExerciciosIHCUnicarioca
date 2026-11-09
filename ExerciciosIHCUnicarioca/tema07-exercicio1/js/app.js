// Componente que mostra um título
function Titulo() {
  return <h1>Meu App de Saudação</h1>;
}

// Componente que captura o nome digitado e envia para o componente pai
function Formulario({ aoDigitar }) {
  return (
    <input
      type="text"
      placeholder="Digite seu nome"
      onChange={(e) => aoDigitar(e.target.value)}
    />
  );
}

// Componente que exibe "Olá, [nome]"
function Mensagem({ nome }) {
  return <p>Olá, {nome}</p>;
}

// NOVO COMPONENTE: mensagem personalizada de acordo com o nome
function Saudacao({ nome }) {
  if (!nome) {
    return <p>Bem-vindo(a)! Digite seu nome acima</p>;
  } else {
    return <p>Olá, {nome}! Que bom ter você aqui</p>;
  }
}

// Componente pai: guarda o estado "nome" e passa para os filhos
function App() {
  const [nome, setNome] = React.useState("");

  return (
    <div>
      <Titulo />
      <Formulario aoDigitar={setNome} />
      <Mensagem nome={nome} />
      <Saudacao nome={nome} />
    </div>
  );
}

// Renderiza o App dentro da div #root
ReactDOM.render(<App />, document.getElementById('root'));
