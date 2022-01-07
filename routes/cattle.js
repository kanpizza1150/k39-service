const express = require('express')
const router = express.Router()

const Cattle = require('../models/Cattle')
//========== Get all
router.get('/', async (req, res) => {
  const queryName = req.query.name
  const query = queryName ? { name: { $eq: queryName } } : {}
  try {
    const cattle = await Cattle.find(query)
    res.json(cattle)
  } catch (err) {
    res.json({ message: err })
  }
})

//========== Create
router.post('/', async (req, res) => {
  const cattle = new Cattle({
    dateOfBirth: req.body.dateOfBirth,
    gender: req.body.gender,
    name: req.body.name,
    nickname: req.body.nickname,
    certificateId: req.body.certificateId,
    dam: req.body.dam,
    sire: req.body.sire,
    treatment: req.body.treatment,
    insemination: req.body.insemination,
    pregnancy: req.body.pregnancy,
    children: req.body.children,
    rutDate: req.body.rutDate,
    image: req.body.image,
    certificate: req.body.certificate,
  })
  try {
    const savedCattle = await cattle.save()
    res.json(savedCattle)
  } catch (err) {
    res.json({ message: err })
  }
})

//========== Get by id
router.get('/:cattleId', async (req, res) => {
  const cattleId = req.params.cattleId
  try {
    const cattle = await Cattle.findById(cattleId)
    res.json(cattle)
  } catch (err) {
    res.json({ message: err })
  }
})

//========== Delete by id
router.delete('/:cattleId', async (req, res) => {
  const cattleId = req.params.cattleId
  try {
    const removedCattle = await Cattle.remove({ _id: cattleId })
    res.json(removedCattle)
  } catch (err) {
    res.json({ message: err })
  }
})

//========== Update by id
router.patch('/:cattleId', async (req, res) => {
  const cattleId = req.params.cattleId
  try {
    const updatedCattle = await Cattle.updateOne(
      { _id: cattleId },
      {
        $set: {
          dateOfBirth: req.body.dateOfBirth,
          gender: req.body.gender,
          name: req.body.name,
          nickname: req.body.nickname,
          certificateId: req.body.certificateId,
          dam: req.body.dam,
          sire: req.body.sire,
          treatment: req.body.treatment,
          insemination: req.body.insemination,
          pregnancy: req.body.pregnancy,
          children: req.body.children,
          rutDate: req.body.rutDate,
          image: req.body.image,
          certificate: req.body.certificate,
        },
      }
    )
    res.json(updatedCattle)
  } catch (err) {
    res.json({ message: err })
  }
})
module.exports = router
