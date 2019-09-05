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

module.exports = transporter