const mongoose = require('mongoose');
const fs = require('fs');

// Definindo o esquema do documento
const ImagemSchema = new mongoose.Schema({
  dados: Buffer
});


const ImagemModel = mongoose.model('Imagem', ImagemSchema);