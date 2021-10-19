const { Schema, model } = require('mongoose');


const producto = Schema({
  title: { 
      type: String, 
      required: true, 
      unique: true 
  },
  description: { 
      type: String 
  },
  price: { 
      type: Number, 
      required: true 
  },
  url: { 
      type: String, 
      required: true 
  },
  disponible: { 
      type: Boolean, 
      required: true 
  }
});


module.exports = model('Producto', producto);