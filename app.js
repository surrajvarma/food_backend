const express = require('express');
const app = express();
const dishesRouter = require('./routes/dishes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/dishes', dishesRouter);

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});