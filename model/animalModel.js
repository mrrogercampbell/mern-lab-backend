const mongoose = require('../db/connection')


const Animal = new mongoose.Schema({
    animalName: String,
    photoUrl: String,
    animalOrgin: String,
    animalDetails: String,
})

mongoose.model('animalModel', Animal)

module.exports = mongoose