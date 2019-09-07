/**
 * 
 * Conexão do banco de dados mongodb...
 * -- Observação tem que iniciar o mongo na sua maquina com comando
 *    start
 */
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/calcule', {useNewUrlParser: true})
mongoose.Promise = global.Promise

module.exports = mongoose