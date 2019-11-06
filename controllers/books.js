const booksRouter = require('express').Router()
const Book = require('../models/book')
const User = require('../models/user')

booksRouter.post('/', async (request, response, next) => {
  const body = request.body

  if (body.title === undefined || body.author === undefined) {
    return response.status(400).json({ error: 'Book title or author missing!' })
  }

  const book = new Book({
    title: body.title,
    author: body.author,
    year: body.year,
    votes: body.votes
  })

  try {
    const savedBook = await book.save()
    response.json(savedBook.toJSON())
  } catch (exception) {
    next(exception)
  }
})

booksRouter.get('/', async (request, response) => {
  const books = await Book.find({})
  response.json(books.map(book => book.toJSON()))
})

booksRouter.get('/:id', async (request, response, next) => {
  try {
    const book = await Book.findById(request.params.id)

    if (book) {
      response.json(book.toJSON())
    } else {
      response.status(404).end()
    }
  } catch (exception) {
    next(exception)
  }
})

booksRouter.delete('/:id', async (request, response, next) => {
  try {
    await Book.findByIdAndRemove(request.params.id)
    response.status(204).end()
  } catch (exception) {
    next(exception)
  }
})

booksRouter.put('/:id', async (request, response, next) => {
  const { body } = request

  const voteBook = [{ 
    userId: body.userId,
    vote: body.vote
  }]
  const voteUser = [{
    bookId: body.bookId,
    vote: body.vote
  }]

  const book = await Book.findById(body.bookId)
  const booksUpdatedVotes = book.votes.concat(voteBook)
  const user = await User.findById(body.userId)
  const usersUpdatedVotes = user.votes.concat(voteUser)

  Book.findByIdAndUpdate(body.bookId, { votes: booksUpdatedVotes }, { new: true })
  .then(updatedBook => {
    response.json(updatedBook.toJSON())
  })
  User.findByIdAndUpdate(body.userId, {votes: usersUpdatedVotes }, { new: true })
  .then(updatedUser => {
    response.json(updatedUser.toJSON())
  })
  .catch(error => next(error))
  
})

module.exports = booksRouter
