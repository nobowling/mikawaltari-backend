const mongoose = require('mongoose')

const memberSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  favoriteAuthor: String,
  motto: String
})

memberSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Member = mongoose.model('Member', memberSchema)

module.exports = Member
