import mongoose from "mongoose";

const BooksSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },

    publishedDate: {
        type: Date,
        default: Date.now()

    }



})

const BooksModel = mongoose.model('Book', BooksSchema)

export default BooksModel