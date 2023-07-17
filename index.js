const express = require('express')
const routePlanilha = require('./routes/routePlanilha')

const app = express()

app.use(routePlanilha)

app.listen(8084, _ => {
    console.log('Servidor rodando na porta 8084')
})