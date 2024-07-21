const express = require('express');
const router = express.Router();
const Dish = require('../models/Dish');
const multer = require('multer');

const upload = multer({ dest: './uploads/' });

router.post('/register', upload.single('image'), async (req, res) => {
  try {
    const { name, ingredients, price } = req.body;
    const image = req.file.buffer;

    const dish = new Dish({ name, ingredients, price, image });
    await dish.save();

    res.status(201).send({ message: 'Dish registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Error registering dish' });
  }
});

module.exports = router;