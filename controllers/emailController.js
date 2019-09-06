const transporter = require('../config/config-mail-trap')


module.exports = {
    email(req, res) {
        return res.sendFile('/home/jose-murillo/Documentos/projeto-node/email-send-project/html/home.html')
    },

    emailSend(req, res) {
        const {email, desc} = req.body
        const mensage = {
            from: email,
            to: 'jooseemurillo@gmail.com',
            subject: 'TESTE EMAIL',
            text: desc,
        }
       
        transporter.sendMail(mensage, (erro, info) =>{
            if(erro) {
                return res.status(400).send('Falhou!')
            } else {
                return res.status(200).send('<h1>Obrigado por enviar o EMAIL</h1>')
            }
        })
    }
}