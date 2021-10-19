const Producto = require('../models/producto');
const { response } = require('express');

const addProduct = (req, res = response) => {
  const productoAdd = new Producto({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    url: req.body.url,
    categoria: req.body.categoria,
    disponible: req.body.disponible,
  });

  productoAdd
    .save()
    .then((createdProduct) => {
      res.status(201).json("Creado satisfactoriamente");
    })
    .catch((error) => {
      res.status(500).json({ err: error });
    });
};

module.exports = addProduct;
