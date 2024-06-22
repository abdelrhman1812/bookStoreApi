import { Router } from "express";
import { addBook, deleteBook, getBooks, getBooksById, updateBook } from "./bookscontroller.js";

const booksRouter = Router()

booksRouter.post('/', addBook)
booksRouter.get('/', getBooks)
booksRouter.get('/:id', getBooksById)
booksRouter.put('/:id', updateBook)
booksRouter.delete('/:id', deleteBook)

export default booksRouter