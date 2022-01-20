//Use o back-end sempre na porta 3001, pois o front é na 3000. Mas qualquer numero pode ser usado

const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.json()); //bodyParser passa o body para json, pois o body transforma o dado para string

const books = [
	{ id: 1, title: 'The Lord of Rings', author: 'J.R.R. Tolkien'},
	{ id: 2, title: 'Dune', author: 'Frank Herbert'},
	{ id: 3, title: 'Foundation', author: 'Isaac Asimov'},
	{ id: 4, title: 'The Man in The High Castle', author: 'Philip K Dick'},
	{ id: 5, title: '1984', author: 'George Orwell'},
	{ id: 6, title: 'Brave New World', author: 'Aldous Huxley'}
];

app.get('/', (_req, res) => {
  res.send('Hello, T14!')
});

app.get('/books', (_req, res) => {
  res.status(200).json(books);
});

app.get('/book/:id', (req, res) => {
  const { id } = req.params; // traz como string, por isso eu passo para numero inteiro na linha 31

  const book = books.find((b) => b.id === +id); // + no id sig. que estou passando esse id para ser um numero inteiro. Eu poderia usar o parseInt(id) tambem.

  if (!book) return res.status(404).json({ message: 'Book not found!'}) //(!book) -> se esse book não existir

  console.log('passou do if!')

  return res.status(200).json(book);
});

app.get('/books/search', function (req, res) {
  const { author } = req.query;
	const filteredBooks = books.filter((b) => b.author === author);

	if (filteredBooks.length === 0) return res.status(200).json({ message: `'book with author ${author} was not found!`});

	res.status(200).json({ books: filteredBooks });
});

app.post('/books', function (req, res) {
	const { id, title, author } = req.body;
	books.push({ id, title, author });
	res.status(201).json({ message: 'Book created!'});
});

app.put('/books/:id', function (req, res) {
  const { id } = req.params;
  const { title, author } = req.body;
  const bookIndex = books.findIndex((b) => b.id === +id);

  if (bookIndex === -1) return res.status(404).send({ message: "Book not found!" });

  books[bookIndex] = { id, title, author };

  res.status(204).end(); //.end -> deu certo e termina ali.
});

app.delete('/books/:id', function (req, res) {
  const { id } = req.params;
  const bookIndex = books.findIndex((b) => b.id === parseInt(id));

  if (bookIndex === -1) return res.status(404).send({ message: "Book not found!" });

  books.splice(bookIndex, 1);

  res.status(204).end();
});


app.listen(3001, () => {
  console.log("🚀 Nossa primeira API está rodando!!!")
});