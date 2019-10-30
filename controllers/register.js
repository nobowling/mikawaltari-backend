const registerRouter = require('express').Router()
const User = require('../models/user')
const bcrypt = require('bcrypt')

registerRouter.post('/', async (request, response, next) => {
  try {
    const { body } = request
    const passwordHash = await bcrypt.hash(body.password, 10)

    const user = new User({
      username: body.username,
      favoriteAuthor: body.favoriteAuthor,
      motto: body.motto,
      password: passwordHash
    })

    const savedUser = await user.save()

    response.json(savedUser)
  } catch (exception) {
    next(exception)
  }
})

registerRouter.get('/', async (request, response) => {
  response.send('Hello')
})

module.exports = registerRouter
