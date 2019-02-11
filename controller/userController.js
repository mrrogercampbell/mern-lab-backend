const mongoose = require('../model/userModel')
const User = mongoose.model('userModel')

mongoose.Promise = Promise


module.exports = {
    index: (req, res) => {
        res.send('hello') 
    },

    new: (req, res) => {
        res.send('hello') 
    },

    create: (req, res) => {
        res.send('hello') 
    },

    showOne: (req, res) => {
        res.send('hello') 
    },

    update: (req, res) => {
        res.send('hello') 
    },

    destroy: (req, res) => {
        res.send('hello') 
    }
}