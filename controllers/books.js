const booksRouter = require('express').Router()
const Book = require('../models/book')

booksRouter.post('/', async (request, response, next) => {
  const body = request.body

  if (body.title === undefined || body.author === undefined) {
    return response.status(400).json({ error: 'Book title or author missing!' })
  }

  const book = new Book({
    title: body.title,
    author: body.author,
    year: body.year,
    votes: body.votes,
    rating: body.rating
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

booksRouter.put('/:id', (request, response, next) => {
  const { body } = request

  const book = {
    title: body.title,
    author: body.author,
    year: body.year,
    votes: body.votes,
    rating: body.rating
  }

  Book.findByIdAndUpdate(request.params.id, book, { new: true })
    .then(updatedBook => {
      response.json(updatedBook.toJSON())
    })
    .catch(error => next(error))
})

module.exports = booksRouter
