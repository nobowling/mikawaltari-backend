const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  username: String,
  motto: String,
  favoriteAuthor: String,
  passwordHash: String,
})

userSchema.statics.format = (user) => {
  return {
    id: user.id,
    username: user.username,
    motto: user.motto,
    favoriteAuthor: user.favoriteAuthor
  }
}

const User = mongoose.model('User', userSchema)

module.exports = User