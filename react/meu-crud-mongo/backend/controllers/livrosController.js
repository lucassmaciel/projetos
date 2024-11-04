const Livro = require('../models/livroModel');

exports.getTodosLivros = async (req, res) => {
  try {
    const livros = await Livro.find();
    res.status(200).json(livros);
  } catch (err) {
    console.error('Erro ao buscar livros:', err.message);
    res.status(500).json({ message: 'Erro ao buscar livros', error: err.message });
  }
};

exports.getLivroById = async (req, res) => {
  try {
    const livro = await Livro.findById(req.params.id);
    if (!livro) return res.status(404).json({ message: 'Livro não encontrado' });
    res.status(200).json(livro);
  } catch (err) {
    console.error('Erro ao buscar livro:', err.message);
    res.status(500).json({ message: 'Erro ao buscar livro', error: err.message });
  }
};

exports.criarLivro = async (req, res) => {
  const { isbn, titulo, autor } = req.body;

  try {
    // Verifica se o ISBN já existe
    const livroExistente = await Livro.findOne({ isbn });
    if (livroExistente) {
      return res.status(400).json({ message: 'ISBN já cadastrado.' });
    }

    // Cria um novo livro se o ISBN não existir
    const novoLivro = new Livro({ isbn, titulo, autor });
    await novoLivro.save();
    res.status(201).json(novoLivro);
  } catch (err) {
    console.error('Erro ao criar livro:', err.message);
    res.status(500).json({ message: 'Erro ao criar livro', error: err.message });
  }
};

exports.atualizarLivro = async (req, res) => {
  try {
    const livro = await Livro.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!livro) return res.status(404).json({ message: 'Livro não encontrado' });
    res.status(200).json(livro);
  } catch (err) {
    console.error('Erro ao atualizar livro:', err.message);
    res.status(500).json({ message: 'Erro ao atualizar livro', error: err.message });
  }
};

exports.deletarLivro = async (req, res) => {
  try {
    const livro = await Livro.findByIdAndDelete(req.params.id);
    if (!livro) return res.status(404).json({ message: 'Livro não encontrado' });
    res.status(200).json({ message: 'Livro deletado com sucesso' });
  } catch (err) {
    console.error('Erro ao deletar livro:', err.message);
    res.status(500).json({ message: 'Erro ao deletar livro', error: err.message });
  }
};
