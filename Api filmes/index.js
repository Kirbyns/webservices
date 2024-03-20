const express = require('express');

const cors = require('cors') // pacote cors para lidar com solicitações de diferetes origens

const filmes = require('./filmes.json'); // importação dos dados dos filmes 
const path = require('path');

//criação da instância do express

const app = express();

//definição da porta em que o servidor irá ouvir 
const PORT = 8080;

//confiruações do middleware cors para permitir solicitações de diferentes origens
app.use(cors()); // essa linha adiciona o middleware Cors ao aplicativo express

//definição do middleware paa servir arquivos estáticos
app.use(express.static(path.join(__dirname,'public')));

app.get('/filmes',(req, res)=> { //definição da rota para os filmes

    res.json(filmes); //retorna os dados dos filmes como uma resposta json

});


app.listen(PORT,()=> {


    console.log(`Sevidor em execução em http://locahost:${PORT}`);

});