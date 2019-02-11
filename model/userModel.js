const mongoose = require('./connection.js')


const User = new mongoose.Schema({
    email: String,
    photoUrl: String,
    photoTitle: String,
    photoDetails: String
})

mongoose.module('userModel', User)

module.exports = mongoose