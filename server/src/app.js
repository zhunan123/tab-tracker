/* eslint-disable indent */
/* eslint-disable no-unused-vars */
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.post('/register', (req, res) => {
    res.send({
        message: `Hello ${req.body.email}! Your user was registered! Have fun!`
    })
})

// eslint-disable-next-line eol-last
app.listen(process.env.PORT || 8081)