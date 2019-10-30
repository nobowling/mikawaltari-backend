const usersRouter = require('express').Router()
const User = require('../models/user')
const bcrypt = require('bcrypt')

usersRouter.post('/', async (request, response, next) => {
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

usersRouter.get('/', async (request, response) => {
  const users = await User.find({})
  response.json(users.map(user => user.toJSON()))
})

usersRouter.get('/:id', async (request, response, next) => {
  try {
    const user = await User.findById(request.params.id)
    console.log(user)
    if (user) {
      response.json(user.toJSON())
    } else {
      response.status(404).end()
    }
  } catch (exception) {
    next(exception)
  }
})

usersRouter.delete('/:id', async (request, response, next) => {
  try {
    await User.findByIdAndRemove(request.params.id)
    response.status(204).end()
  } catch (exception) {
    next(exception)
  }
})

usersRouter.put('/:id', (request, response, next) => {
  const body = request.body

  const user = {
    firstName: body.firstName,
    lastName: body.lastName,
    favoriteAuthor: body.favoriteAuthor,
    motto: body.motto
  }

  User.findByIdAndUpdate(request.params.id, user, { new: true })
    .then(updatedUser => {
      response.json(updatedUser.toJSON())
    })
    .catch(error => next(error))
})

module.exports = usersRouter
