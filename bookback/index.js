// Import dependencies
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bookRouter = require("./routes/book-routes");
const userRouter = require("./routes/user-routes");

// Initialize Express app
const app = express();

// Middleware setup
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON bodies

// Route handlers
app.use("/books", bookRouter); // Routes for books
app.use("/users", userRouter); // Routes for users

// Connect to MongoDB
mongoose.connect("mongodb+srv://AmyReni:amyrenivarghese@cluster0.vviph2k.mongodb.net/OpenBatchdb3?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {
    console.log("Connected to db3");
    // Start the server
    app.listen(5001, () => {
        console.log("Server is running on port 5001");
    });
})
.catch((error) => console.log(error));
