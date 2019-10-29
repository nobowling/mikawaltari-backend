const config = require('./utils/config')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const booksRouter = require('./controllers/books')
const membersRouter = require('./controllers/members')
const middleware = require('./utils/middleware')
const logger = require('./utils/logger')
const mongoose = require('mongoose')
const cors = require('cors');

logger.info('Connecting to', config.MONGODB_URI)

mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true })
  .then(() => {
    logger.info('Connected to MongoDB')
  })
  .catch((error) => {
    logger.error('Error connection to MongoDB:', error.message)
  })

// TODO: Make sure this cors setting is fine for production
app.use(cors({ credentials: true, origin: 'http://localhost:8080' }));

app.use(express.static('build'))
app.use(bodyParser.json())
app.use(middleware.requestLogger)

app.use('/api/members', membersRouter)
app.use('/api/books', booksRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app
