const Book = require ("../model/book.js");

// Controller Function
// Get all books

module.exports.getAllBooks = () => {
    return Book.find({}).then(result => {
        return result;
    })
}

