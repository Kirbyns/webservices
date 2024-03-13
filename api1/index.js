const express = require('express');
const app = express();

app.get('/',(req, res) =>{
    res.send('hello, world');
});

app.listen(8080, () =>{
    let data = new Date();
    console.log('servidor node iniciado em: '+data);


});