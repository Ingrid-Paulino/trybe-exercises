const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

app.get('/recipes', function (req, res) {
  res.status(200).json(recipes);
});

app.get('/recipes/search', function (req, res) {
  const { name, maxPrice } = req.query;
  const filteredRecipes = recipes.filter((r) => r.name.includes(name) && r.price < parseInt(maxPrice));
  res.status(200).json(filteredRecipes);
});

app.get('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === parseInt(id));
  if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});

  res.status(200).json(recipe);
});

// Middlewares
// qualquer função passada para uma rota é um middleware
// validação se o nome não foi enviado vazio ao cadastrar uma nova receita

// # Essa requisição vai retornar { message: 'Invalid data!'}
// http POST :3001/recipes price:=40
// # Experimente chamar essa request com o código correto, e depois comentando o next. A requisição não vai retornar uma resposta.
// http POST :3001/recipes name=Macarronada price:=40

//FORMA 1
// app.post('/recipes',
// function (req, res, next) {
//   const { name } = req.body;
//   if (!name || name === '') return res.status(400).json({ message: 'Invalid data!'}); // 1

//   next(); // 2
// },
// function (req, res) { // 3
//   const { id, name, price } = req.body;
//   recipes.push({ id, name, price});
//   res.status(201).json({ message: 'Recipe created successfully!'});
// });

// app.put('/recipes/:id', function (req, res) {
//   const { id } = req.params;
//   const { name, price, waitTime } = req.body;
//   const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

//   if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

//   recipes[recipeIndex] = { ...recipes[recipeIndex], name, price, waitTime };

//   res.status(204).end();
// });

//FORMA 2
function validateName(req, res, next) {
  const { name } = req.body;
  if (!name || name === '') return res.status(400).json({ message: 'Invalid data!'});

  next();
};

app.post('/recipes', validateName, function (req, res) {
  const { id, name, price } = req.body;
  recipes.push({ id, name, price});
  res.status(201).json({ message: 'Recipe created successfully!'});
});


app.put('/recipes/:id', validateName, function (req, res) {
  const { id } = req.params;
  const { name, price } = req.body;
  const recipesIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipesIndex === -1)
    return res.status(404).json({ message: 'Recipe not found!' });

  recipes[recipesIndex] = { ...recipes[recipesIndex], name, price };

  res.status(204).end();
});

//FORMA 3 - É UM FORMATO GLOBAL. ex na pasta middlewares_global


app.delete('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes.splice(recipeIndex, 1);

  res.status(204).end();
});

app.all('*', function (req, res) {
    return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});