import AuthorsModel from "../../models/Authors.model.js";


/* POST request to create a new author. */

const addauthor = async (req, res) => {

    try {
        const body = req.body;
        const author = await AuthorsModel.insertMany(body);
        res.status(201).json({ message: 'Success', author });
    } catch (error) {
        res.status(500).json({ message: 'Error', error: error.message });
    }

}

/* GET request to retrieve all authors. */

const getAuthors = async (req, res) => {
    const { page, name, bio } = req.query;
    let filter = {};

    if (name) {
        filter.name = { $regex: name };
    }

    if (bio) {
        filter.bio = { $regex: bio };
    }

    try {
        const authors = await AuthorsModel.find(filter).populate("books").skip((page - 1) * 2).limit(2);
        res.status(201).json({ message: 'Success', authors });
    } catch (error) {
        res.status(500).json({ message: 'Error', error: error.message });
    }

}


/* GET request to retrieve a single author by its ID. */

const getAuthorById = async (req, res) => {

    try {
        const authorId = req.params.id;
        const author = await AuthorsModel.findById(authorId).populate('books');
        if (!author) {
            return res.status(404).json({ message: 'Author not found' });
        }
        res.status(200).json({ message: 'Success', author });
    } catch (error) {
        res.status(500).json({ message: 'Error', error: error.message });
    }
}

/* PATCH request to update an author by its ID. */

const updateAuthor = async (req, res) => {

    try {
        const body = req.body;
        const authorId = req.params.id;
        const author = await AuthorsModel.findByIdAndUpdate(authorId, body, { new: true });
        if (!author) {
            return res.status(404).json({ message: 'Author not found' });
        }
        res.status(200).json({ message: 'Success', author });
    } catch (error) {
        res.status(500).json({ message: 'Error', error: error.message });
    }
}

/* DELETE request to delete a book by its ID. */

const deleteAuthor = async (req, res) => {

    try {
        const authorId = req.params.id;
        const author = await AuthorsModel.findByIdAndDelete(authorId);
        if (!author) {
            return res.status(404).json({ message: 'Author not found' });
        }
        res.status(200).json({ message: 'Success Delete Author' });
    } catch (error) {
        res.status(500).json({ message: 'Error', error: error.message });
    }
}

export { addauthor, deleteAuthor, getAuthorById, getAuthors, updateAuthor };

