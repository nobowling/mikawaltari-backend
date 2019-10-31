
const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('give password as argument')
  process.exit(1)
}

const url = 'mongodb+srv://KÄYTTÄJÄTUNNUS:SALASANA@mikawaltari-tuiv4.mongodb.net/mikawaltari?retryWrites=true&w=majority'

mongoose.connect(url, { useNewUrlParser: true })

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  year: Number,
  votes: [Number],
  rating: Number
})

const Book = mongoose.model('Book', bookSchema)

const book = new Book({
  title: 'Testikirja Teppo',
  author: 'Rami Peräkoukku',
  year: 1999,
  votes: [1, 2, 3],
  rating: 2
})

// book.save().then(response => {
//   console.log('book saved!');
//   mongoose.connection.close();
// })

Book.find({}).then(result => {
  result.forEach(book => {
    console.log(book)
  })
  mongoose.connection.close()
})
