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
        Animal.create({
            animalName: req.body.animalName,
            photoUrl: req.body.photoUrl,
            animalOrigin: req.body.animalOrigin,
            animalDetails: req.body.animalDetails
        })
        .then(newAnimal => {
            console.log(`Hey check out the new animal ${newAnimal}`)
            res.json(newAnimal)
        })
    },

    showOne: (req, res) => {
        Animal.findOne({_id: req.params.id})
        .then(showOneAnimal => {
            console.log(showOneAnimal)
            res.json(showOneAnimal)
          })
    },

    update: (req, res) => {
        res.send('hello') 
    },

    destroy: (req, res) => {
        Animal.findOneAndRemove({_id: req.params.id})
        .then( (animal) => {
            res.json(animal)
        })
    }
}