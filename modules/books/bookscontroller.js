import BooksModel from "../../models/Books.model.js";


/* POST request to create a new book. */

const addBook = async (req, res) => {

    try {
        const body = req.body;
        const book = await BooksModel.insertMany(body);
        res.status(201).json({ message: 'Success', book });
    } catch (error) {
        res.status(500).json({ message: 'Error', error: error.message });
    }

}

/* GET request to retrieve all books. */

const getBooks = async (req, res) => {
    const { page, title, author } = req.query;
    let filter = {};

    if (title) {
        filter.title = { $regex: title };
    }

    if (author) {
        filter.author = { $regex: author };
    }

    try {
        const books = await BooksModel.find(filter)
            .skip((page - 1) * 2)
            .limit(2);

        res.status(200).json({ message: 'Success', books });
    } catch (error) {
        res.status(500).json({ message: 'Error', error: error.message });
    }
}


/* GET request to retrieve a single book by its ID. */

const getBooksById = async (req, res) => {

    try {
        const bookId = req.params.id;
        const book = await BooksModel.findById(bookId);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.status(200).json({ message: 'Success', book });
    } catch (error) {
        res.status(500).json({ message: 'Error', error: error.message });
    }
}

/* PATCH request to update a book by its ID. */

const updateBook = async (req, res) => {

    try {
        const body = req.body;
        const bookId = req.params.id;
        const book = await BooksModel.findByIdAndUpdate(bookId, body, { new: true });
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.status(200).json({ message: 'Success', book });
    } catch (error) {
        res.status(500).json({ message: 'Error', error: error.message });
    }
}

/* DELETE request to delete a book by its ID. */

const deleteBook = async (req, res) => {

    try {
        const bookId = req.params.id;
        const book = await BooksModel.findByIdAndDelete(bookId);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.status(200).json({ message: 'Success Delete Book' });
    } catch (error) {
        res.status(500).json({ message: 'Error', error: error.message });
    }
}









export { addBook, deleteBook, getBooks, getBooksById, updateBook };

