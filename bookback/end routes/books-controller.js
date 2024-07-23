const Book = require("../model/Book");

const getAllBooks = async (req, res, next) => {
  try {
    const books = await Book.find();
    if (!books) return res.status(404).json({ message: "No books found" });
    return res.status(200).json({ books });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

const getById = async (req, res, next) => {
  const id = req.params.id;
  try {
    const book = await Book.findById(id);
    if (!book) return res.status(404).json({ message: "No book found" });
    return res.status(200).json({ book });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

const addBook = async (req, res, next) => {
  const { name, author, description, price, availability, image } = req.body;
  try {
    const book = new Book({
      name,
      author,
      description,
      price,
      availability,
      image,
    });
    await book.save();
    return res.status(201).json({ book });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Unable to add book" });
  }
};

const updateBook = async (req, res, next) => {
  const id = req.params.id;
  const { name, author, description, price, availability, image } = req.body;
  try {
    const book = await Book.findByIdAndUpdate(
      id,
      { name, author, description, price, availability, image },
      { new: true }
    );
    if (!book) return res.status(404).json({ message: "Book not found" });
    return res.status(200).json({ book });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Unable to update book" });
  }
};

const deleteBook = async (req, res, next) => {
  const id = req.params.id;
  try {
    const book = await Book.findByIdAndDelete(id);
    if (!book) return res.status(404).json({ message: "Book not found" });
    return res.status(200).json({ message: "Book successfully deleted" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Unable to delete book" });
  }
};

module.exports = {
  getAllBooks,
  getById,
  addBook,
  updateBook,
  deleteBook,
};
