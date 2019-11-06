const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  username: String,
  motto: String,
  favoriteAuthor: String,
  passwordHash: String,
  votes: [
    {
      _id: false,
      bookId: String,
      vote: Number
    }
  ]
})

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const User = mongoose.model('User', userSchema)

module.exports = User