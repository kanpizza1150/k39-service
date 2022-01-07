const mongoose = require('mongoose')

const TreatmentHistorySchema = mongoose.Schema({
  name: { type: String },
  date: { type: Date },
})
const TreatmentUpcomingSchema = mongoose.Schema({
  name: { type: String },
  date: { type: Date },
  isDone: { type: Boolean },
})
const TreatmentSchema = mongoose.Schema({
  history: {
    type: [TreatmentHistorySchema],
    default: [],
  },
  upcoming: {
    type: [TreatmentUpcomingSchema],
    default: [],
  },
})
const PregnancySchema = mongoose.Schema({
  inseminationDate: { type: Date },
  semen: { type: String },
  firstPassed: { type: Boolean },
  secondPassed: { type: Boolean },
  status: { type: String, default: 'fail' },
})
const InseminationSchema = mongoose.Schema({
  date: { type: Date },
  semen: { type: String },
})
const CattleSchema = mongoose.Schema({
  dateOfBirth: {
    type: Date,
  },
  gender: {
    type: String,
  },
  name: {
    type: String,
  },
  certificateId: {
    type: String,
  },
  nickname: {
    type: String,
  },
  dam: {
    type: String,
  },
  sire: {
    type: String,
  },
  treatment: {
    type: TreatmentSchema,
  },
  insemination: {
    type: [InseminationSchema],
    default: [],
  },
  pregnancy: {
    type: PregnancySchema,
    default: {},
  },
  children: { type: Array, default: [] },
  rutDate: { type: [Date] },
  image: {
    type: [String],
    default: [],
  },
  certificate: {
    type: [String],
    default: [],
  },
})

module.exports = mongoose.model('Cattle', CattleSchema)
