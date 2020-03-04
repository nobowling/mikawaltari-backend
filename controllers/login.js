const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const loginRouter = require('express').Router()
const User = require('../models/user')

loginRouter.post('/', async (request, response) => {
  try {
    const { body } = request

    const user = await User.findOne({ username: body.username })
    console.log('Found user from db:', user)
    const passwordCorrect = user === null
      ? false
      : await bcrypt.compare(body.password, user.passwordHash)
    console.log('password correct:', passwordCorrect)
    if (!(user && passwordCorrect)) {
      return response.status(401).json({ error: 'Invalid username or password' })
    }

    const userForToken = {
      username: user.username,
      id: user._id,
    }
    console.log('user for token:', userForToken)
    const token = jwt.sign(userForToken, process.env.SECRET)

    response
      .status(200)
      .send({ token, username: user.username })
  } catch (error) {
    response
      .status(500).json({ error: 'Internal server error.' })
  }
})

loginRouter.get('/verify-token/:token', async (request, response) => {
  try {
    const { token } = request.params

    jwt.verify(token, process.env.SECRET)

    response.sendStatus(200)
  } catch (error) {
    response.status(403).json({ error: 'Forbidden' })
  }
})

module.exports = loginRouter