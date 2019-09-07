const Usuario = require('../models/usuario')

module.exports = {

    cadastrar(req, res) {
        return res.sendFile('/home/jose-murillo/Documentos/projeto-node/email-send-project/html/cadastrar.html')
    },

    async cadastrarSend(req, res) {
        const user = await new Usuario(req.body)
        return res.send('Ok.')
    }

}