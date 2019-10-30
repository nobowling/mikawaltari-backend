const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  username: String,
  favoriteAuthor: String,
  motto: String,
  password: String
})

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const User = mongoose.model('User', userSchema)

module.exports = User
