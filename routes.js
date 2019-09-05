const express = require('express')

const transporter = require('./config/config-mail-trap')

const routes = express.Router()

routes.get('/', (req, res) => {
    res.sendFile(__dirname + '/html/home.html')
})

routes.post('/', (req, res) => {
    const {email, desc} = req.body
    
    console.log('[>] '+ email, desc)

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
})

module.exports = routes