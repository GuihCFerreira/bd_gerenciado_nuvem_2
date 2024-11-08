const express = require('express');
const dotenv = require('dotenv');
const sequelize = require('./config/db');
const Produto = require('./model/produto');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

sequelize.authenticate()
  .then(() => {
    console.log('Conectado ao banco de dados com sucesso.');
  })
  .catch((error) => {
    console.error('Erro ao conectar ao banco de dados:', error);
  });


async function criarProduto() {
  
  try{
    const produtoInserido = await Produto.create({
      descricao: `Produto ${Math.floor( Math.random() * 10000)}`,
      categoria: 'Teste',
      valor: 100.00,
      criado_por: 'sobrancelha',
    });

    if (produtoInserido != null ){
      //Função que faz 10 select para cada id de pedido anterior ao id do pedido anterior
      // Exemplo, se o inserido for o 7, deve fazer 10 select no  6, no 5, no 4, 3 ...
      for (let i = 0; i < produtoInserido.id; i++) {
        console.log(`\nSelect no produto de ID: ${i}`);
        for (let j = 0; j < 10; j++) {
          const produtos = await Produto.findOne({ where: { id: i } });
          if (produtos != null )console.log( produtos.toJSON());
        }
      }
    }
    
    console.log('\nÚltimo produto inserido:', produtoInserido.toJSON());

  } catch (error) {
    console.error('Erro ao criar produto:', error);
  }
}

// Função para criar um produto a cada 1 segundo (pode colocar entre 500 a 1000ms)
setInterval(criarProduto, 1000);

app.listen(port, () => {console.log(`Rodando na porta ${port}`)});