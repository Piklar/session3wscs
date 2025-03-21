const express = require("express");
const router = require("express").Router();

const bookController = require('../controllers/bookControllers.js');

module.exports = router;

// Router to get all books
router.get("/", (req, res) => {
    bookController.getAllBooks().then(result => res.send(result)
    );
})

// Router to insert book
router.post("/", bookController.addBook);

// Router to delete a book
router.delete("/:bookId", bookController.deleteBook);

// Router to update a book
router.put("/:bookId", bookController.updateBook);

// Router to get a book by ID
router.get("/:bookId", bookController.getBookById);

// Router to change IsAvailable status
router.put("/:bookId/changeStatus", bookController.changeStatus);