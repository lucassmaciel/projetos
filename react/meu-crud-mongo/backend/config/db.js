const mongoose = require('mongoose');

const connectDB = async() =>{
    try {
        await mongoose.connect('mongodb://localhost:27017/biblioteca');
        console.log("MongoDB Connected...")
    } catch {
        console.error("Error ao conectar ao MongoDB", err.message)
        process.exit(1)
    }
};

module.exports = connectDB;