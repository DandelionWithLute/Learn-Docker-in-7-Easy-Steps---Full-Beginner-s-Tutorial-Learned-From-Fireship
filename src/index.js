const app = require('express')();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`App is listening at http://localhost:${port}`);
});