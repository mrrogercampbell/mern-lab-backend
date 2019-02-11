const mongoose = require('../model/animalModel')
const seeds = require('./seedData.json')
const Animal = mongoose.model('animalModel')

mongoose.Promise = Promise

Animal.remove({}).then(_ => {
    console.log('Dropped the DB')
    Animal.collection.insert(seeds).then(animals => {
        console.log(seeds)
        mongoose.connection.close()
    })
    .catch(err => {
        console.log(err)
    })
})