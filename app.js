const config = require('./utils/config')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const booksRouter = require('./controllers/books')
const usersRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')
const middleware = require('./utils/middleware')
const logger = require('./utils/logger')
const mongoose = require('mongoose')

logger.info('Connecting to', config.MONGODB_URI)

mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true })
  .then(() => {
    logger.info('Connected to MongoDB')
  })
  .catch((error) => {
    logger.error('Error connection to MongoDB:', error.message)
  })

app.use(express.static('build'))
app.use(bodyParser.json())
app.use(middleware.requestLogger)
app.use('/api/users', usersRouter)
app.use('/api/books', booksRouter)
app.use('/api/login', loginRouter)
app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app
