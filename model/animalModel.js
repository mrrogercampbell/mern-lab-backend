const mongoose = require('../db/connection.js')


const Animal = new mongoose.Schema({
    animalName: String,
    photoUrl: String,
    animalOrgin: String,
    animalDetails: String,
})

mongoose.module('animalModel', Animal)

module.exports = mongoose