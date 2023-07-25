import authors from "../models/Author.js";

class AuthorController {

  static authorList = (req, res) => {
    authors.find({}) // Utilizando authors.find() com um objeto vazio para buscar todos os autores
    .then((authors) => {
      res.status(200).json(authors);
    })
    .catch((err) => {
      // Lida com o erro, se ocorrer
      res.status(500).json({ error: 'Error fetching authors' });
    });
  }

  static authorListById = (req, res) => {
    const authorId = req.params.id;
    authors.findById(authorId)
      .then((author) => {
        if (!author) {
          return res.status(404).json({ error: 'Author not found' });
        }
        res.status(200).json(author);
      })
      .catch((err) => {
        res.status(500).send({ message: `${err.message} - there was some error` });
      });
  };


  static insertAuthor = (req, res) => {
    const author = new authors(req.body);
    author.save()
      .then((savedAuthor) => {
        res.status(201).send(savedAuthor.toJSON());
      })
      .catch((err) => {
        res.status(500).send({ message: `${err.message} - there was some error` });
      });
  }

  static updateAuthor = (req, res) => {
    const authorId = req.params.id;
    const updatedData = req.body;
    authors.findByIdAndUpdate(authorId, updatedData, { new: true }) // O { new: true } faz com que o método retorne o documento atualizado
      .then((updatedAuthor) => {
        if (!updatedAuthor) {
          return res.status(404).json({ error: 'Author not found' });
        }
        res.json(updatedAuthor.toJSON());
      })
      .catch((err) => {
        res.status(500).json({ error:  `${err.message} - there was some error` });
      });
  }

  static removeAuthor = (req, res) => {
    const authorId = req.params.id;
    authors.findByIdAndDelete(authorId)
    .then((authorRemoved) => {
      if (!authorRemoved) {
        return res.status(404).json ({ error: 'Author not found' });
      }
       res.status(200).send({message: 'The author has been successfully removed'});

    })
    .catch ((err) => {
      res.status(500).json ({err});
    })

  }
}

export default AuthorController;