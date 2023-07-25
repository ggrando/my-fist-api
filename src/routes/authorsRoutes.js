import express from "express";
import AuthorController from "../controllers/authorsController.js";

const router = express.Router();

router
 .get("/authors", AuthorController.authorList)
 .get("/authors/:id", AuthorController.authorListById)
 .post("/authors", AuthorController.insertAuthor)
 .put("/authors/:id", AuthorController.updateAuthor)
 .delete("/authors/:id", AuthorController.removeAuthor);

export default router;