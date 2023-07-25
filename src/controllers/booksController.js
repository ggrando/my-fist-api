import books from "../models/Book.js";

class BookController {

  static bookList = (req, res) => {
    books.find() // Utilizando books.find() com um objeto vazio para buscar todos os livros
    .populate('author')
    .exec()
    .then((books) => {
      res.status(200).json(books);
    })
    .catch((err) => {
      // Lida com o erro, se ocorrer
      res.status(500).json({ error: 'Error fetching books' });
    });
  }

    static bookListById = (req, res) => {
      const bookid = req.params.id;
      books.findById(bookid) 
      .populate('author', 'name')
      .exec()
        .then((book) => {
          if (!book) {
            return res.status(404).json({ error: 'Book not found' });
          }
          res.status(200).json(book);
        })
        .catch((err) => {
          res.status(500).send({ message: `${err.message} - there was some error` });
        });
    };

    static bookListByPublisher = (req, res) => {
      const publisher = req.query.publisher
      books.find({'publisher':publisher}, {})
      .then((books) => {
        return res.status(200).json(books); // Enviar os livros encontrados na resposta
      })
      .catch((err) => {
        res.status(500).json({ message: `Error fetching books by publisher: ${err.message}` });
      });   
    }
      

    
  static insertBook = (req, res) => {
    const book = new books(req.body);
    book.save()
      .then((savedBook) => {
        res.status(201).send(savedBook.toJSON());
      })
      .catch((err) => {
        res.status(500).send({ message: `${err.message} - there was some error` });
      });
  }

  static updateBook = (req, res) => {
    const bookId = req.params.id;
    const updatedData = req.body;
    books.findByIdAndUpdate(bookId, updatedData, { new: true }) // O { new: true } faz com que o método retorne o documento atualizado
      .then((updatedBook) => {
        if (!updatedBook) {
          return res.status(404).json({ error: 'Book not found' });
        }
        res.json(updatedBook.toJSON());
      })
      .catch((err) => {
        res.status(500).json({ error:  `${err.message} - there was some error` });
      });
  }

  static removeBook = (req, res) => {
    const bookId = req.params.id;
    books.findByIdAndDelete(bookId)
    .then((bookRemoved) => {
      if (!bookRemoved) {
        return res.status(404).json ({ error: 'Book not found' });
      }
       res.status(200).send({message: 'The book has been successfully removed'});
    })
    .catch ((err) => {
      res.status(500).json ({err});
    })
  }
}

export default BookController;