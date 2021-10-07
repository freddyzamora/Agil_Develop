var express = require('express')
const http = require('http')
var app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world')
})

app.set("port", 3002) //El aplicativo esta escuchando en el puerto 3002
const server = http.createServer(app) //Levantar el servidor
server.listen(3002)