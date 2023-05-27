const mongoose = require('mongoose'); // requer o mongoose (para usar o mongoDB)

const dbConfig = 'mongodb+srv://PedroMongo:mongodb@cluster0.ezwosod.mongodb.net/annotations?retryWrites=true&w=majority'
// caso dê erro, ou trocar a senha mongodb ou mudar (ou tirar) o annotations
const connection = mongoose.connect(dbConfig, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}) // conecta ao banco de dados

module.exports = connection; // exporta a conexão

