const mongoose = require('mongoose')

const SemenSchema = mongoose.Schema({
  sire: { type: String },
  price: { type: Number },
  quantity: { type: Number },
  buyFrom: { type: String },
  keepAt: { type: String },
})

module.exports = mongoose.model('Semen', SemenSchema)
