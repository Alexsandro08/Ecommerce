const express = require('express');
const app = express();
const hand = require('express-handlebars');
const path = require('path');
const router = require('./routes/rotas');
const mongoose = require('mongoose');
const fs = require('fs');
const handlebarsHelpers = require('handlebars-helpers');
const handlebars = require('handlebars');
require('./models/products');
const Product = mongoose.model('products');

// Handlebars
app.engine('handlebars', hand.engine({
  defaultLayout: 'main',
  helpers: {
    base64Image: (image)=> {
      if (image && image.buffer) {
        return new handlebars.SafeString(Buffer.from(image.buffer).toString('base64'));
      }
      return '';
    }
  }
}));
app.set('view engine', 'handlebars');

//configs
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

//rotas
app.use('/', router);

// Conexão com o Mongo
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/ecommerce', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Conectado ao MongoDB');
  })
  .catch(err => {
    console.error('Erro ao conectar ao MongoDB:', err);
  });

// Rota principal
app.get('/', (req, res) => {
  Product.find()
    .lean()
    .then(products => {
      res.render('index', { products: products });
    })
    .catch(err => {
      console.error('Erro ao buscar produtos:', err);
      res.status(500).send('Erro interno do servidor');
    });
});

// Rota de busca
app.get('/search', (req, res) => {
  const search = req.query.search;

  Product.find({ title: { $regex: search, $options: 'i' } })
    .lean()
    .then(products => {
       setTimeout(function(){
          res.render('search', { products: products });
      },500)
    
    })
    .catch(err => {
      console.error('Erro ao buscar produtos:', err);
      res.status(500).send('Erro interno do servidor');
    });
});

//Port
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("Porta criada");
});
