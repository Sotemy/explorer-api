const express = require('express')
const colors = require("colors")
const dotenv = require('dotenv').config()
const connectDB = require("./config/db")
const errorHandler = require( "./middleware/errorMiddleware")

connectDB()

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api', require('./routes/appRouter'))
app.use('/api/auth', require('./routes/authRouter'))

app.use(errorHandler)

app.listen(process.env.PORT, () => { console.log('Server is up!') })