const mongoose = require ("mongoose");

const vendedor = mongoose.Schema({

    Nombres: {type: String, required: true},
    Apellidos: {type: String, required: true},
    Ciudad: {type: String, required: true},
    Tipo_documento: {type: Number, required: true},
    Documento: {type: String, required: true},
    Email: {type: String, required: true},
    Telefono: {type: Number, required: true},
    Fecha: {type: String, required: true},
    Rol: {type: String, required: true},
    Estado: {type: String}

});

module.exports = mongoose.model("users",vendedor);