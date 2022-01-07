const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
require('dotenv/config')

//Middleware
app.use(cors())
app.use(bodyParser.json())

//Import Routes
const cattleRoutes = require('./routes/cattle')
const semenRoutes = require('./routes/semen')

app.use('/semen', semenRoutes)
app.use('/cattle', cattleRoutes)

//ROUTES
app.get('/', (req, res) => {
  res.send('Welcome to K39 Brahman ranch')
})

//Connect tot DB
mongoose.connect(process.env.DB_CONNECTION, () => console.log('Connect to DB'))
//How to start listening the server
app.listen(3001)
