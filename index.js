require('dotenv').config();
const email_routes = require('./routes/emailRouter')
const express = require('express')
const app = express()
const port = 3001
app.use(express.json())
app.use('/api/emails', email_routes)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})