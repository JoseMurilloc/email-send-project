const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const nodeMailder = require('nodemailer')


const config = {
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
        user: 'c811cff80f7820',
        pass: 'e29d164b53bf85'
    }
}

const transporter = nodeMailder.createTransport(config)

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/html/home.html')
})

app.post('/', (req, res) => {
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
            return res.status(200).sendFile(__dirname + '/html/hello.html')
        }
    })
})

app.listen(3333, () => {
    console.log('O servido está no ar!')
})