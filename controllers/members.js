const membersRouter = require('express').Router()
const Member = require('../models/member')

membersRouter.post('/', async (request, response, next) => {
  try {
    const body = request.body

    const member = new Member({
      firstName: body.firstName,
      lastName: body.lastName,
      favoriteAuthor: body.favoriteAuthor,
      motto: body.motto
    })

    const savedMember = await member.save()

    response.json(savedMember)
  } catch (exception) {
    next(exception)
  }
})

membersRouter.get('/', async (request, response) => {
  const members = await Member.find({})
  response.json(members.map(member => member.toJSON()))
})

module.exports = membersRouter
