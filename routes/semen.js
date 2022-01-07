const express = require('express')
const router = express.Router()

const Semen = require('../models/Semen')
//========== Get all
router.get('/', async (req, res) => {
  try {
    const semens = await Semen.find()
    res.json(semens)
  } catch (err) {
    res.json({ message: err })
  }
})

//========== Create
router.post('/', async (req, res) => {
  const semen = new Semen({
    sire: req.body.sire,
    price: req.body.price,
    quantity: req.body.quantity,
    buyFrom: req.body.buyFrom,
    keepAt: req.body.keepAt,
  })
  try {
    const savedSemen = await semen.save()
    res.json(savedSemen)
  } catch (err) {
    res.json({ message: err })
  }
})

//========== Create by id
router.get('/:semenId', async (req, res) => {
  const semenId = req.params.semenId
  try {
    const createdSemen = await Semen.findById(semenId)
    res.json(createdSemen)
  } catch (err) {
    res.json({ message: err })
  }
})

//========== Delete by id
router.delete('/:semenId', async (req, res) => {
  const semenId = req.params.semenId
  try {
    const removedSemen = await Semen.remove({ _id: semenId })
    res.json(removedSemen)
  } catch (err) {
    res.json({ message: err })
  }
})

//========== Update by id
router.patch('/:semenId', async (req, res) => {
  const semenId = req.params.semenId
  try {
    const updatedSemen = await Semen.updateOne(
      { _id: semenId },
      {
        $set: {
          sire: req.body.sire,
          price: req.body.price,
          quantity: req.body.quantity,
          buyFrom: req.body.buyFrom,
          keepAt: req.body.keepAt,
        },
      }
    )
    res.json(updatedSemen)
  } catch (err) {
    res.json({ message: err })
  }
})
module.exports = router
