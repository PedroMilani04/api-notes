const express = require('express') // Requer express    
const routes = require('./routes') // Requer as rotas
const cors = require('cors') // Requer cors (comunicação com outras portas, como a 3000)

const app = express() // usa o express
require('./config/dbconfig') // requer a config do banco

app.use(cors()) // usa o cors
const port = process.env.PORT || 3333


app.use(express.json()) // usa o express
app.use(routes) // usa as rotas


app.listen(3333) // escuta a porta 3333