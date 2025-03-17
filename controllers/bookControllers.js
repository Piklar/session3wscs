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

// Update a Book
module.exports.updateBook = (req, res) => {

    let newContent = req.body;

    return Book.findByIdAndUpdate(req.params.bookId, newContent).then(result => {
        if(result){
            res.send(result)
        }else{
            res.send("The book cannot be found!")
        }

    })
    .catch(err => res.send(err))
}

// Get Book by ID
module.exports.getBookById = (req, res) => {
    return Book.findById(req.params.bookId).then(result => {
        if(result){
            res.send(result)
        }else{
            res.send("The book cannot be found!")
        }

    })
    .catch(err => res.send(err))
}

// Change IsAvailable status
module.exports.changeStatus = (req, res) => {
    return Book.findByIdAndUpdate(req.params.bookId, {isAvailable: req.body.isAvailable}).then(result => {
        if(result){
            res.send(result)
        }else{
            res.send("The book cannot be found!")
        }

    })
    .catch(err => res.send(err))
}