const path = require('path')
const express = require('express')
const dotenv = require('dotenv').config()
const cors = require('cors')
const port = process.env.PORT || 5000

const app = express()

// Enable CORS for all routes
app.use(cors())

// Enable body parser
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Set static folder
app.use(express.static(path.join(__dirname, 'public')))

app.use('/openai', require('./routes/openaiRoutes'))

app.listen(port, () => console.log(`Server running on port ${port}`))
