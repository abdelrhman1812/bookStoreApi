import express from 'express'
import { dbConnection } from './dataBase/db.connections.js'
import authorsRouter from './modules/authors/authors.routes.js'
import booksRouter from './modules/books/books.routes.js'

/* Global */

dbConnection
const port = 3200
const app = express()
app.use(express.json())


/* Router */

app.use('/books', booksRouter)
app.use('/authors', authorsRouter)

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))