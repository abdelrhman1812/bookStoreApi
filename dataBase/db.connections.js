import mongoose from "mongoose";


export const dbConnection = mongoose.connect('mongodb://localhost:27017/bookStors').then(() => {
    console.log(' ======== Success connection mongoose ======== ');
})

