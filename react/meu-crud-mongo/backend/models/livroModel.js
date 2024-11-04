const mongoose = require('mongoose')

const LivroSchema = new mongoose.Schema({
    isbn : {
        type : String,
        required : true,
        unique : true
    },
    titulo : {
        type : String,
        required : true
    },
    autor : {
        type : String,
        required : true
    },
});

module.exports = mongoose.model('Livro', LivroSchema);
