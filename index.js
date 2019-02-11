const express = require('express')
const parser = require('body-parser')
const cors = require('cors')
const mongoose = require('./db/schema.js')

app.use(parser.json())
app.use(cors())
app.use(express.static('client/build'))




app.listen(3001, () => {
    console.log('listening on port 3001')
})