const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const connectDB = require('./config/db');
const LivrosRoutes = require('./routes/livrosRoutes');



connectDB();

const app = express();
app.use(cors());
app.use(bodyparser.json());

app.use('/livros', LivrosRoutes);
app.use('api/livros', LivrosRoutes);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => 
    console.log(`Server running on port ${PORT}`));

