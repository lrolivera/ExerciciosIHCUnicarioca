function App() {
  // Estados
  const [nome, setNome] = React.useState("");
  const [cliques, setCliques] = React.useState(0);
  const tarefas = ["Estudar React", "Fazer exercícios", "Tomar café"];

  return (
    <div>
      <h1>Olá!</h1>
      <p>Digite seu nome:</p>
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <p>Você digitou: <strong>{nome}</strong></p>

      <h2>Tarefas:</h2>
      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>{tarefa}</li>
        ))}
      </ul>

      <button onClick={() => setCliques(cliques + 1)}>
        Clique aqui
      </button>
      <p>Cliques: <strong>{cliques}</strong></p>
    </div>
  );
}

// Renderiza o componente dentro da div #root
ReactDOM.render(<App />, document.getElementById('root'));
