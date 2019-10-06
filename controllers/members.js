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

membersRouter.get('/:id', async (request, response, next) => {
  try {
    const member = await Member.findById(request.params.id)
    console.log(member)
    if (member) {
      response.json(member.toJSON())
    } else {
      response.status(404).end()
    }
  } catch (exception) {
    next(exception)
  }
})

membersRouter.delete('/:id', async (request, response, next) => {
  try {
    await Member.findByIdAndRemove(request.params.id)
    response.status(204).end()
  } catch (exception) {
    next(exception)
  }
})

membersRouter.put('/:id', (request, response, next) => {
  const body = request.body

  const member = {
    firstName: body.firstName,
    lastName: body.lastName,
    favoriteAuthor: body.favoriteAuthor,
    motto: body.motto
  }

  Member.findByIdAndUpdate(request.params.id, member, { new: true })
    .then(updatedMember => {
      response.json(updatedMember.toJSON())
    })
    .catch(error => next(error))
})

module.exports = membersRouter
