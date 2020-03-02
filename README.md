# mikawaltari-backend

Back end for the web page of the infamous book club, Mikä Waltari.

# Project setup
```
npm i
```

# Run server
```
npm start
```

# Run server in development mode
```
npm run watch
```

```
Need .env file for database connection + other hidden environment variables 
```

# API CRUDs
```
/api/books/
- POST ('/') - creates new book object, properties: title, author, year, votes (empty by default)
- POST ('/:id) - adds vote object to votes array, vote properties: bookId, userId, vote: NUMBER
- GET ('/') - returns all books as JSON
- GET ('/:id') - returns single book as JSON
- DELETE ('/:id') - deletes book object
- PUT ('/:id') - updates book's title, author and year properties
```
```
/api/users/
- POST ('/') - creates new user object, properties username, motto, favoriteAuthor, password, active (true by default)
- GET ('/') - returns all users as JSON
- GET ('/:id') - returns single user as JSON
- DELETE ('/:id') - edits user's active property to false
- PUT ('/:id') - updates user's username, motto, favoriteAuthor properties
// TODO password change
```

```
/api/login/
- POST - user login with username and password, returns token //TODO verify user's token before doing all these actions :D
```
