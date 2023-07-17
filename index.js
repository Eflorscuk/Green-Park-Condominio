const express = require('express')

const app = express()

app.listen(8084, _ => {
    console.log('Servidor rodando na porta 8084')
})