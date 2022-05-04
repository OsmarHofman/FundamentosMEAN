const express = require('express')

const server = express()

server.route('/clientes')
    .get((req,res) => res.send('Lista de Clientes'))
    .post((req,res) => res.send('Novo CLiente'))
    .put((req,res) => res.send('Altera Cliente'))
    .delete((req,res) => res.send('Remove CLiente'))

server.listen(3000, () => console.log("Executando..."))