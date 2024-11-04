import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css';

const App = () => {
  // Define o estado dos livros e outras variáveis
  const [livros, setLivros] = useState([]);
  const [livro, setLivro] = useState({ id: "", isbn: "", titulo: "", autor: "" });
  const [editando, setEditando] = useState(false);
  const [erro, setErro] = useState(null);

  // Função para buscar todos os livros - equivalente ao componentDidMount
  useEffect(() => {
    fetchLivros();
  }, []);

  const fetchLivros = async () => {
    try {
      const res = await axios.get("http://localhost:5001/api/livros");
      setLivros(res.data);
    } catch (error) {
      console.error("Erro ao buscar os livros!", error);
      setErro("Erro ao buscar os livros.");
    }
  };

  // Função para lidar com a mudança nos inputs
  const handleChange = (e) => {
    setLivro({ ...livro, [e.target.name]: e.target.value });
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editando && livro._id) {
        await axios.put(`http://localhost:5001/api/livros/${livro._id}`, livro);
      } else {
        await axios.post("http://localhost:5001/api/livros", livro);
      }

      setLivro({ id: "", isbn: "", titulo: "", autor: "" });
      setEditando(false);
      fetchLivros(); // Atualiza a lista de livros após salvar
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert("ISBN já cadastrado. Por favor, use um ISBN diferente.");
      } else {
        console.error("Erro ao salvar o livro:", error);
      }
    }
  };

  // Função para lidar com a edição de um livro
  const handleEdit = (livro) => {
    setLivro(livro);
    setEditando(true);
  };

  // Função para lidar com a exclusão de um livro
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5001/api/livros/${id}`);
      fetchLivros(); // Atualiza a lista de livros após a exclusão
    } catch (error) {
      console.error("Erro ao excluir o livro:", error);
      setErro("Erro ao excluir o livro.");
    }
  };

  return (
    <div className="App">
      <h1>Biblioteca</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="isbn"
          value={livro.isbn}
          onChange={handleChange}
          placeholder="ISBN"
          required
        />
        <input
          type="text"
          name="titulo"
          value={livro.titulo}
          onChange={handleChange}
          placeholder="Título"
          required
        />
        <input
          type="text"
          name="autor"
          value={livro.autor}
          onChange={handleChange}
          placeholder="Autor"
          required
        />
        <button type="submit">Salvar</button>
      </form>

      {erro && <p className="erro">{erro}</p>}

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>ISBN</th>
            <th>Título</th>
            <th>Autor</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {livros.map((livro) => (
            <tr key={livro._id}>
              <td>{livro._id}</td>
              <td>{livro.isbn}</td>
              <td>{livro.titulo}</td>
              <td>{livro.autor}</td>
              <td>
                <button onClick={() => handleEdit(livro)}>Editar</button>
                <button onClick={() => handleDelete(livro._id)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
