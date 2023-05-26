const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

// Route to render the form view
app.get('/', (req, res) => {
  res.render('index');
});

// Route to handle form submission
app.post('/result', (req, res) => {
  const { name, location, codingLanguage, comments } = req.body;
  res.render('result', { name, location, codingLanguage, comments });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
