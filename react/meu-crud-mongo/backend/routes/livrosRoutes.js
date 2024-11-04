const express = require('express');
const router = express.Router();
const LivrosController = require('../controllers/livrosController');

router.get('/livros', LivrosController.getTodosLivros);
router.get('/livros/:id', LivrosController.getLivroPorId);
router.post('/livros', LivrosController.adicionarLivro);
router.put('/livros/:id', LivrosController.atualizarLivro);
router.delete('/livros/:id', LivrosController.deletarLivro);

module.exports = router;