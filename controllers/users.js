const bcrypt = require('bcryptjs')
const usersRouter = require('express').Router()
const User = require('../models/user')

usersRouter.get('/', async (request, response) => {
  const users = await User
    .find({})
  response.json(users.map(user => user.toJSON()))
})

usersRouter.post('/', async (request, response) => {
  try {
    const { body } = request

    const existingUser = await User.find({ username: body.username })
    if (existingUser.length > 0) {
        return response.status(400).json({
            error: 'Username must be unique'
        })
    }

    const saltRounds = 10
    const passwordHash = await bcrypt.hash(body.password, saltRounds)

    const user = new User({
      username: body.username,
      motto: body.motto,
      favoriteAuthor: body.favoriteAuthor,
      passwordHash
    })

    const savedUser = await user.save()

    response.json(savedUser.toJSON())
  } catch (error) {
      response.status(500).json({
        error: 'Something went wrong when creating new user'
      })
  }
})

usersRouter.get('/:id', async (request, response, next) => {
  try {
    const user = await User.findById(request.params.id)

    if (user) {
      response.json(user.toJSON())
    } else {
      response.status(404).end()
    }
  } catch (error) {
    next(error)
  }
})

usersRouter.delete('/:id', async (request, response, next) => {
  try {
    await User.findByIdAndRemove(request.params.id)
    response.status(204).end()
  } catch (error) {
    next(error)
  }
})

usersRouter.put('/:id', async (request, response, next) => {
  try {
  const { body } = request

  const user = await User.findById(request.params.id)

  const updateUser = {
    username: body.username,
    motto: body.motto,
    favoriteAuthor: body.favoriteAuthor,
    passwordHash: user.passwordHash,
    votes: body.votes
  }

  User.findByIdAndUpdate(request.params.id, updateUser, { new: true })
    .then(updatedUser => {
      response.json(updatedUser)
    })
  } catch (error) {
    next(error)
  }
})

module.exports = usersRouter