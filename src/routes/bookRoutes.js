import express  from "express";
import BookController from "../controllers/booksController.js";

const router = express.Router();

router
 .get("/books", BookController.bookList)
 .get("/books/search", BookController.bookListByPublisher) //Precisa vir antes do :id, pois, ele prioriza a ordem
 .get("/books/:id", BookController.bookListById)
 .post("/books", BookController.insertBook)
 .put("/books/:id", BookController.updateBook)
 .delete("/books/:id", BookController.removeBook);

export default router;  