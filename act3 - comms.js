// Get Book by ID
module.exports.getBookById = async (req, res) => {
    try {
      const result = await Book.findById(req.params.bookId);
      if (result) {
        res.send(result);
      } else {
        res.send("The book cannot be found!");
      }
    } catch (err) {
      res.send(err);
    }
  };
  
  // Change IsAvailable status
  module.exports.changeStatus = async (req, res) => {
    try {
      const result = await Book.findByIdAndUpdate(
        req.params.bookId,
        { isAvailable: req.body.isAvailable },
        { new: true } // Ensures the updated document is returned
      );
      if (result) {
        res.send(result);
      } else {
        res.send("The book cannot be found!");
      }
    } catch (err) {
      res.send(err);
    }
  };