const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  year: Number,
  votes: [Number],
  rating: Number
})

bookSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Book = mongoose.model('Book', bookSchema)

module.exports = Book
