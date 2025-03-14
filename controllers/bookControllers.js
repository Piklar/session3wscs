const Book = require ("../model/book.js");

// Controller Function
// Get all books

module.exports.getAllBooks = () => {
    return Book.find({}).then(result => {
        return result;
    })
}

// Add Book
module.exports.addBook = (req, res) => {
    let reqBody = req.body;
    let newBook = new Book({
        title: reqBody.title,
        genre: reqBody.genre,
        description: reqBody.description,
        authors: reqBody.authors,
        stocks: reqBody.stocks,
    })

    return newBook.save().then((result, err) => {
        if (err) {
            console.log(err);
            res.send(false);
        }else{
            res.send(result);
        }
    })
}

// Delete a Book (This is the best practice. Using catch block to catch errors)
module.exports.deleteBook = (req, res) => {
    return Book.findByIdAndDelete(req.params.bookId)
    .then(removeBook => res.send(removeBook))
    .catch(err => res.send(false))
}