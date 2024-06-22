import mongoose from "mongoose";

const AuthorsSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        required: true
    },
    birthDate: {
        type: Date,
        required: true
    },

    books: [{
        type: mongoose.Types.ObjectId,
        ref: 'Book',
    }]

})

const AuthorsModel = mongoose.model('Author', AuthorsSchema)

export default AuthorsModel