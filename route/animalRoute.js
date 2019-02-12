const express = require('express')
const router = express.Router()
const animalController = require('../controller/animalController')

router.get('/', animalController.index)

router.get('/new', animalController.new)

router.post('/', animalController.create)

// router.get('/success', animalController.success)

router.get('/:id', animalController.showOne)

// router.put('/:id', animalController.update)

router.delete('/:id', animalController.destroy)

// router.get('/:id/edit', animalController.edit)



module.exports = router