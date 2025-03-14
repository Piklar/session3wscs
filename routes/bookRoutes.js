const express = require("express");
const router = require("express").Router();

const bookController = require('../controllers/bookControllers.js');

// Router to get all books
router.get("/", (req, res) => {
    bookController.getAllBooks().then(result => res.send(result)
    );
})

// Router to insert book
router.post("/", bookController.addBook);

module.exports = router;

// Router to delete a book
router.delete("/:bookId", bookController.deleteBook);