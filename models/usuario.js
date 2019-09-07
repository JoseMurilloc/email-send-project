const { Schema, model } = require('mongoose')
require('../database/index')

const usuarioSchema = new Schema({
    name: String,
    age: Number,
    sex: String,
    heiht: Number,
    stink: Number,
    image: {
        data: Buffer,
        contantType: String
    }
})

const Usuario = model('Usuario', usuarioSchema)

module.exports = Usuario