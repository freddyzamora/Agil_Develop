var express = require("express");

var app = express();

//app.use(express.json);
//app.use(express.urlencoded({ extended:false}));

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  const varx = "ejemplo de algo a mostrar en Json"
  res.status(200).json(varx);
  // res.status(200) (explicacion aqui se dice que fue ok segun el estado 404 es otro famoso) .json( varx)

})

module.exports = app;