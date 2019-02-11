const mongoose = require('../model/animalModel')
const Animal = mongoose.model('animalModel')

mongoose.Promise = Promise


module.exports = {
    index: (req, res) => {
        Animal.find({})
        .then(animals => {
            res.json(animals)
        })
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