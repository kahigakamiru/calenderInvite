const express = require('express')
// const sendEmail = require('../config/mailerConfig.js')
const router = express.Router()

const { EmailSender } = require('../controllers/emailControllers.js')

router.route('/').get(EmailSender)

module.exports = router