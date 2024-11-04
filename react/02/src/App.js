import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Routes, useParams } from 'react-router-dom';
import Topo from './components/Topo';
import Home from './components/Home';
import Frontend from './components/FrontEnd';
import Programacao from './components/Programacao';
import Design from './components/Design';
import Catalogo from './components/Catalogo';
import Rodape from './components/Rodape';
import axios from 'axios';

class App extends Component {
  state = {
    erro: false,
    livros: [], // Adiciona a propriedade livros ao estado
  };

  async componentDidMount() {
    try {
      const { data: livros } = await axios.get('/api/todosOsLivros.json');
      this.setState({ livros });
    } catch (error) {
      console.log(error);
      this.setState({ erro: true });
    }
  }

  render() {
    return (
      <Router>
        <Topo />
        <Routes>
          <Route path="/" element={<Home livros={this.state.livros} />} />
          <Route path="/frontend" element={<Frontend />} />
          <Route path="/programacao" element={<Programacao />} />
          <Route path="/design" element={<Design />} />
          <Route path="/catalogo" element={<Catalogo />} />
        </Routes>
        <Rodape />
      </Router>
    );
  }
}

export default App;