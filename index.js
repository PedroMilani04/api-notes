const express = require('express') // Requer express    
const routes = require('./src/routes') // Requer as rotas
const cors = require('cors') // Requer cors (comunicação com outras portas, como a 3000)

const app = express() // usa o express
require('./src/config/dbconfig') // requer a config do banco

app.use(cors()) // usa o cors
const port = process.env.PORT || 3333

app.get('/', (req, res) => {
    return res.json({ message: 'Hello World' })
})


app.use(express.json()) // usa o express
app.use(routes) // usa as rotas


app.listen(3333) // escuta a porta 3333
