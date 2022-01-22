const express = require('express')
const db = require('./db')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 3000

app.use(cors())

const AuthController = require('./auth/authController')

app.use('/api/upcloud', AuthController)

app.listen(port, (err) => {
    if(err) throw err
    console.log(`Listening to port ${port}`)
})