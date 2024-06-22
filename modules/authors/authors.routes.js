import { Router } from "express";
import { addauthor, deleteAuthor, getAuthorById, getAuthors, updateAuthor } from "./authors.controller.js";

const authorsRouter = Router()

authorsRouter.post('/', addauthor)
authorsRouter.get('/', getAuthors)
authorsRouter.get('/:id', getAuthorById)
authorsRouter.put('/:id', updateAuthor)
authorsRouter.delete('/:id', deleteAuthor)

export default authorsRouter