const mongoose = require('../db/connection')


const Animal = new mongoose.Schema({
    animalName: String,
    photoUrl: String,
    animalOrigin: String,
    animalDetails: String,
})

mongoose.model('animalModel', Animal)

module.exports = mongoose