// 1 require express
const express = require("express");

// 2 creation instance
const app = express()

// 5 require dotenv & configure
require('dotenv').config()

// 8 Middleware bodyparser
app.use(express.json())

// 6 connectDB
const connectDB = require('./config/connectDB');
connectDB()

// 7 Routes
app.use('/api/contacts', require('./routes/contact'))

// 3 creation PORT 
const PORT = process.env.PORT

// 4 creation server
app.listen(PORT, error => {
    error ? console.error(`Failed to connect to server !!! ${error}`)
    :
    console.log(`Server is running on port ${PORT}`)
})